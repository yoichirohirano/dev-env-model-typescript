import createURLSearchParamsFromObject from '../../../util/functions/createURLSearchParams';

describe('createURLSearchParamsFromObject', () => {
  const param = {
    property1: 'One',
    property2: '2',
  };
  test('isInstanceOfURLSearchParams', () => {
    expect(createURLSearchParamsFromObject(param)).toBeInstanceOf(
      URLSearchParams,
    );
  });
  test('hasCorrectProperties', () => {
    const expectedRegExp = new RegExp('property1=One&property2=2');
    const res = createURLSearchParamsFromObject(param);
    expect(res.toString()).toMatch(expectedRegExp);
  });
});
