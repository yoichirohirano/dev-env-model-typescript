import * as util from '../helper/util';
import CONSTANT from '../helper/CONSTANT';

describe('wrapAlphanumericWithSpan', () => {
  test('Normal - Single Sentence', () => {
    const string = 'One';
    const newString = `<span class="${CONSTANT.TEST.CLASS_NAME}">${string}</span>`;
    expect(util.wrapAlphanumericWithSpan({ string, className: CONSTANT.TEST.CLASS_NAME })).toEqual(
      newString,
    );
  });
  test('Normal - Multiple Sentences', () => {
    const string = '1 2';
    const words = string.split(' ');
    const newString = `<span class="${CONSTANT.TEST.CLASS_NAME}">${words[0]}</span> <span class="${
      CONSTANT.TEST.CLASS_NAME
    }">${words[1]}</span>`;
    expect(util.wrapAlphanumericWithSpan({ string, className: CONSTANT.TEST.CLASS_NAME })).toEqual(
      newString,
    );
  });
  test('Normal - Including Japanese', () => {
    const string = '英語with日本語';
    const newString = `英語<span class="${CONSTANT.TEST.CLASS_NAME}">with</span>日本語`;
    expect(util.wrapAlphanumericWithSpan({ string, className: CONSTANT.TEST.CLASS_NAME })).toEqual(
      newString,
    );
  });
  test('Abnormal - Null Text', () => {
    const string = '';
    expect(util.wrapAlphanumericWithSpan({ string, className: CONSTANT.TEST.CLASS_NAME })).toEqual(
      string,
    );
  });
  test('Abnormal - Null', () => {
    const string = null;
    function testNull() {
      util.wrapAlphanumericWithSpan({ string, className: CONSTANT.TEST.CLASS_NAME });
    }
    expect(testNull).toThrowError('String is invalid.');
  });
  test('Abnormal - undefined', () => {
    const string = undefined;
    function testNull() {
      util.wrapAlphanumericWithSpan({ string, className: CONSTANT.TEST.CLASS_NAME });
    }
    expect(testNull).toThrowError('String is invalid.');
  });
  test('Abnormal - No String', () => {
    function testNull() {
      util.wrapAlphanumericWithSpan({ className: CONSTANT.TEST.CLASS_NAME });
    }
    expect(testNull).toThrowError('String is invalid.');
  });
  test('Abnormal - No ClassName', () => {
    const string = 'One';
    const newString = `<span class="">${string}</span>`;
    expect(util.wrapAlphanumericWithSpan({ string })).toEqual(newString);
  });
});

describe('randomIntegerInRange', () => {
  test('Normal', () => {
    const result = util.randomIntegerInRange({ min: 1, max: 2 });
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(2);
  });
  test('Normal - Reverse', () => {
    const result = util.randomIntegerInRange({ min: 2, max: 1 });
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(2);
  });
  test('Normal - Negative', () => {
    const result = util.randomIntegerInRange({ min: -10, max: -5 });
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-5);
  });
  test('Abnormal - No Minimum', () => {
    const result = util.randomIntegerInRange({ max: 2 });
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(2);
  });
  test('Abnormal - No Maximum', () => {
    const result = util.randomIntegerInRange({ min: 5 });
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
  });
});

describe('isInRange', () => {
  test('Normal - In Range', () => {
    const result = util.isInRange({ number: 5, first: 1, last: 10 });
    expect(result).toBeTruthy();
  });
  test('Normal - Not In Range', () => {
    const result = util.isInRange({ number: 5, first: 1, last: 4 });
    expect(result).toBeFalsy();
  });
  test('Normal - In range (Upper Limit Only)', () => {
    const result = util.isInRange({ number: 5, last: 5 });
    expect(result).toBeTruthy();
  });
  test('Normal - Not In range (Upper Limit Only)', () => {
    const result = util.isInRange({ number: 5, last: 4 });
    expect(result).toBeFalsy();
  });
  test('Normal - In range (Lower Limit Only)', () => {
    const result = util.isInRange({ number: 5, first: 5 });
    expect(result).toBeTruthy();
  });
  test('Normal - Not In range (Lower Limit Only)', () => {
    const result = util.isInRange({ number: 5, first: 6 });
    expect(result).toBeFalsy();
  });
  test('Abnormal - No Number', () => {
    function test() {
      util.isInRange({ number: undefined, first: 1, last: 10 });
    }
    expect(test).toThrowError('No number.');
  });
  test('Abnormal - No range', () => {
    function test() {
      util.isInRange({ number: 5 });
    }
    expect(test).toThrowError('No range.');
  });

  // test('Abnormal - No Maximum', () => {
  //   const result = util.randomIntegerInRange({ min: 5 });
  //   expect(result).toBeGreaterThanOrEqual(0);
  //   expect(result).toBeLessThanOrEqual(5);
  // });
});

describe('getIndexValueOfGivenPercentage', () => {
  test('Normal', () => {
    const odds = [100, 0, 0];
    const results = ['a', 'b', 'c'];
    expect(util.getIndexValueOfGivenPercentage({ odds, results })).toMatch(/a/);
  });
  test('Normal Second', () => {
    const odds = [0, 100, 0];
    const results = ['a', 'b', 'c'];
    expect(util.getIndexValueOfGivenPercentage({ odds, results })).toMatch(/b/);
  });
  test('Abnormal Unequal Length', () => {
    const odds = [0, 100];
    const results = ['a', 'b', 'c'];
    function test() {
      util.getIndexValueOfGivenPercentage({ odds, results });
    }
    expect(test).toThrowError(/Lengths are not equal./);
  });
  test('Abnormal Invalid Odds', () => {
    const odds = [20, 100, 40];
    const results = ['a', 'b', 'c'];
    function test() {
      util.getIndexValueOfGivenPercentage({ odds, results });
    }
    expect(test).toThrowError(/Total odds must be 100./);
  });
});

describe('getQueryObject', () => {
  test('Normal', () => {
    const expectedObject = {
      query1: 'one',
      query2: 'two',
    };
    expect(util.getQueryObject()).toEqual(expect.objectContaining(expectedObject));
  });
});
