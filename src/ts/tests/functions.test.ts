import * as util from '../util/functions';
import { address } from '../../../types/index';

describe('wrapAlphanumericWithSpan', () => {
  const className = 'className';

  test('Normal - Single Sentence', () => {
    const string = 'One';
    const newString = `<span class="${className}">${string}</span>`;
    expect(util.wrapAlphanumericWithSpan(string, className)).toEqual(newString);
  });

  test('Normal - Multiple Sentences', () => {
    const string = '1 2';
    const words = string.split(' ');
    const newString = `<span class="${className}">${
      words[0]
    }</span> <span class="${className}">${words[1]}</span>`;
    expect(util.wrapAlphanumericWithSpan(string, className)).toEqual(newString);
  });

  test('Normal - Including Japanese', () => {
    const string = '英語with日本語';
    const newString = `英語<span class="${className}">with</span>日本語`;
    expect(util.wrapAlphanumericWithSpan(string, className)).toEqual(newString);
  });

  test('Abnormal - Null Text', () => {
    const string = '';
    expect(util.wrapAlphanumericWithSpan(string, className)).toEqual(string);
  });

  test('Abnormal - Null', () => {
    const string = null;
    function testNull() {
      util.wrapAlphanumericWithSpan(string, className);
    }
    expect(testNull).toThrowError('String is invalid.');
  });

  test('Abnormal - undefined', () => {
    const string = undefined;
    function testNull() {
      util.wrapAlphanumericWithSpan(string, className);
    }
    expect(testNull).toThrowError('String is invalid.');
  });

  test('Abnormal - No String', () => {
    function testNull() {
      util.wrapAlphanumericWithSpan(null, className);
    }
    expect(testNull).toThrowError('String is invalid.');
  });

  test('Abnormal - No ClassName', () => {
    const string = 'One';
    const newString = `<span class="">${string}</span>`;
    expect(util.wrapAlphanumericWithSpan(string)).toEqual(newString);
  });
});

// describe('randomIntegerInRange', () => {
//   test('Normal', () => {
//     const result = util.randomIntegerInRange(1, 2);
//     expect(result).toBeGreaterThanOrEqual(1);
//     expect(result).toBeLessThanOrEqual(2);
//   });
//   test('Normal - Reverse', () => {
//     const result = util.randomIntegerInRange(2, 1);
//     expect(result).toBeGreaterThanOrEqual(1);
//     expect(result).toBeLessThanOrEqual(2);
//   });
//   test('Normal - Negative', () => {
//     const result = util.randomIntegerInRange(-10, -5);
//     expect(result).toBeGreaterThanOrEqual(-10);
//     expect(result).toBeLessThanOrEqual(-5);
//   });
//   test('Abnormal - No Minimum', () => {
//     const result = util.randomIntegerInRange(null, 2);
//     expect(result).toBeGreaterThanOrEqual(0);
//     expect(result).toBeLessThanOrEqual(2);
//   });
//   test('Abnormal - No Maximum', () => {
//     const result = util.randomIntegerInRange(5, null);
//     expect(result).toBeGreaterThanOrEqual(0);
//     expect(result).toBeLessThanOrEqual(5);
//   });
// });

// describe('isInRange', () => {
//   test('Normal - In Range', () => {
//     const result = util.isInRange(5, 1, 10);
//     expect(result).toBeTruthy();
//   });
//   test('Normal - Not In Range', () => {
//     const result = util.isInRange(5, 1, 4);
//     expect(result).toBeFalsy();
//   });
//   test('Normal - In range (Upper Limit Only)', () => {
//     const result = util.isInRange(5, null, 5);
//     expect(result).toBeTruthy();
//   });
//   test('Normal - Not In range (Upper Limit Only)', () => {
//     const result = util.isInRange(5, null, 4);
//     expect(result).toBeFalsy();
//   });
//   test('Normal - In range (Lower Limit Only)', () => {
//     const result = util.isInRange(5, 5, null);
//     expect(result).toBeTruthy();
//   });
//   test('Normal - Not In range (Lower Limit Only)', () => {
//     const result = util.isInRange(5, 6, null);
//     expect(result).toBeFalsy();
//   });
//   test('Abnormal - No Number', () => {
//     function test() {
//       util.isInRange(undefined, 1, 10);
//     }
//     expect(test).toThrowError('No number.');
//   });
//   test('Abnormal - No range', () => {
//     function test() {
//       util.isInRange(5, null, null);
//     }
//     expect(test).toThrowError('No range.');
//   });
// });

// describe('getValueOfGivenPercentage', () => {
//   test('Normal', () => {
//     const odds = [100, 0, 0];
//     const results = ['a', 'b', 'c'];
//     expect(util.getValueOfGivenPercentage({ odds, results })).toMatch(/a/);
//   });
//   test('Normal Second', () => {
//     const odds = [0, 100, 0];
//     const results = ['a', 'b', 'c'];
//     expect(util.getValueOfGivenPercentage({ odds, results })).toMatch(/b/);
//   });
//   test('Abnormal Unequal Length', () => {
//     const odds = [0, 100];
//     const results = ['a', 'b', 'c'];
//     function test() {
//       util.getValueOfGivenPercentage({ odds, results });
//     }
//     expect(test).toThrowError(/Lengths are not equal./);
//   });
//   test('Abnormal Invalid Odds', () => {
//     const odds = [20, 100, 40];
//     const results = ['a', 'b', 'c'];
//     function test() {
//       util.getValueOfGivenPercentage({ odds, results });
//     }
//     expect(test).toThrowError(/Total odds must be 100./);
//   });
// });

// describe('getQueryObject', () => {
//   test('Normal', () => {
//     const expectedObject = {
//       query1: 'one',
//       query2: 'two',
//     };
//     expect(util.getQueryObject()).toEqual(
//       expect.objectContaining(expectedObject),
//     );
//   });
// });

// describe('getURLSearchParams', () => {
//   const params = {
//     property1: 'One',
//     property2: 2,
//   };
//   test('isInstanceOfURLSearchParams', () => {
//     expect(util.getURLSearchParams(params)).toBeInstanceOf(URLSearchParams);
//   });
//   test('hasCorrectProperties', () => {
//     const expectedRegExp = new RegExp('property1=One&property2=2');
//     const res = util.getURLSearchParams(params);
//     expect(res.toString()).toMatch(expectedRegExp);
//   });
// });
