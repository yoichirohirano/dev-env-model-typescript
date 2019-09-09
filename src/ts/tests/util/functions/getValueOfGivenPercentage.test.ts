import getValueOfGivenPercentage from '../../../util/functions/getValueOfGivenPercentage';

describe('getValueOfGivenPercentage', () => {
  test('Normal', () => {
    const odds = [100, 0, 0];
    const results = ['a', 'b', 'c'];
    expect(getValueOfGivenPercentage(odds, results)).toMatch(/a/);
  });
  test('Normal Second', () => {
    const odds = [0, 100, 0];
    const results = ['a', 'b', 'c'];
    expect(getValueOfGivenPercentage(odds, results)).toMatch(/b/);
  });
  test('Abnormal Unequal Length', () => {
    const odds = [0, 100];
    const results = ['a', 'b', 'c'];
    function test() {
      getValueOfGivenPercentage(odds, results);
    }
    expect(test).toThrowError(/Lengths are not equal./);
  });
  test('Abnormal Invalid Odds', () => {
    const odds = [20, 100, 40];
    const results = ['a', 'b', 'c'];
    function test() {
      getValueOfGivenPercentage(odds, results);
    }
    expect(test).toThrowError(/Total odds must be 100./);
  });
});
