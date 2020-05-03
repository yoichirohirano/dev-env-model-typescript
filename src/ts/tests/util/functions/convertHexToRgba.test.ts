import convertHexToRgba from '../../../util/functions/convertHexToRgba';

describe('convertHexToRgb', () => {
  test('normal without alpha', () => {
    expect(convertHexToRgba('#ddeeff')).toBe('rgba(221, 238, 255, 1)');
  });
  test('normal with alpha', () => {
    expect(convertHexToRgba('#b4a5d7', 0.5)).toBe('rgba(180, 165, 215, 0.5)');
  });
  test('short without alpha', () => {
    expect(convertHexToRgba('#b4a')).toBe('rgba(187, 68, 170, 1)');
  });
  test('short with alpha', () => {
    expect(convertHexToRgba('#cba', 0.8)).toBe('rgba(204, 187, 170, 0.8)');
  });
  test('invalid hex', () => {
    expect(convertHexToRgba('#ggff22')).toBe(null);
  });
  test('invalid alpha', () => {
    expect(convertHexToRgba('#ddeeff', -2)).toBe('rgba(221, 238, 255, 1)');
  });
});
