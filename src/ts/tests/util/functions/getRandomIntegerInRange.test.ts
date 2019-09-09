import getRandomIntegerInRange from '../../../util/functions/getRandomIntegerInRange';

describe('getRandomIntegerInRange', () => {
  test('Normal', () => {
    const result = getRandomIntegerInRange(1, 2);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(2);
  });
  test('Normal - Reverse', () => {
    const result = getRandomIntegerInRange(2, 1);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(2);
  });
  test('Normal - Negative', () => {
    const result = getRandomIntegerInRange(-10, -5);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-5);
  });
  test('Abnormal - No Minimum', () => {
    const result = getRandomIntegerInRange(null, 2);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(2);
  });
  test('Abnormal - No Maximum', () => {
    const result = getRandomIntegerInRange(5, null);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
  });
});
