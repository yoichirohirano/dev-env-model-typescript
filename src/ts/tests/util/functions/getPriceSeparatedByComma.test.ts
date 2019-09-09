import getPriceSeparatedByComma from '../../../util/functions/getPriceSeparatedByComma';

describe('getPriceSeparatedByComma', () => {
  test('4digit', () => {
    const num = 1000;
    expect(getPriceSeparatedByComma(num)).toMatch(/1,000/);
  });
  test('7digit', () => {
    const num = 1000000;
    expect(getPriceSeparatedByComma(num)).toMatch(/1,000,000/);
  });
});
