import createURLSearchParam from '../../../util/functions/createURLSearchParam';

describe('createURLSearchParam', () => {
  const param = {
    property1: 'One',
    property2: 2,
  };
  test('isInstanceOfURLSearchParam', () => {
    expect(createURLSearchParam(param)).toBeInstanceOf(URLSearchParam);
  });
  test('hasCorrectProperties', () => {
    const expectedRegExp = new RegExp('property1=One&property2=2');
    const res = createURLSearchParam(param);
    expect(res.toString()).toMatch(expectedRegExp);
  });
});
