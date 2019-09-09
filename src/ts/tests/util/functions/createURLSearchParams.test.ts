import createURLSearchParams from '../../../util/functions/createURLSearchParams';

describe('createURLSearchParams', () => {
  const params = {
    property1: 'One',
    property2: 2,
  };
  test('isInstanceOfURLSearchParams', () => {
    expect(createURLSearchParams(params)).toBeInstanceOf(URLSearchParams);
  });
  test('hasCorrectProperties', () => {
    const expectedRegExp = new RegExp('property1=One&property2=2');
    const res = createURLSearchParams(params);
    expect(res.toString()).toMatch(expectedRegExp);
  });
});
