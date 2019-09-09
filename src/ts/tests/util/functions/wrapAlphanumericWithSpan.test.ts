import wrapAlphanumericWithSpan from '../../../util/functions/wrapAlphanumericWithSpan';

describe('wrapAlphanumericWithSpan', () => {
  const className = 'className';

  test('Normal - Single Sentence', () => {
    const string = 'One';
    const newString = `<span class="${className}">${string}</span>`;
    expect(wrapAlphanumericWithSpan(string, className)).toEqual(newString);
  });

  test('Normal - Multiple Sentences', () => {
    const string = '1 2';
    const words = string.split(' ');
    const newString = `<span class="${className}">${words[0]}</span> <span class="${className}">${words[1]}</span>`;
    expect(wrapAlphanumericWithSpan(string, className)).toEqual(newString);
  });

  test('Normal - Including Japanese', () => {
    const string = '英語with日本語';
    const newString = `英語<span class="${className}">with</span>日本語`;
    expect(wrapAlphanumericWithSpan(string, className)).toEqual(newString);
  });

  test('Abnormal - Null Text', () => {
    function testEmptyString() {
      wrapAlphanumericWithSpan('', className);
    }
    expect(testEmptyString).toThrowError('String is invalid.');
  });

  test('Abnormal - Null', () => {
    function testNull() {
      wrapAlphanumericWithSpan(null, className);
    }
    expect(testNull).toThrowError('String is invalid.');
  });

  test('Abnormal - undefined', () => {
    const string = undefined;
    function testNull() {
      wrapAlphanumericWithSpan(string, className);
    }
    expect(testNull).toThrowError('String is invalid.');
  });

  test('Abnormal - No String', () => {
    function testNull() {
      wrapAlphanumericWithSpan(null, className);
    }
    expect(testNull).toThrowError('String is invalid.');
  });

  test('Abnormal - No ClassName', () => {
    const string = 'One';
    const newString = `<span class="">${string}</span>`;
    expect(wrapAlphanumericWithSpan(string)).toEqual(newString);
  });
});
