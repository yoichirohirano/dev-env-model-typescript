import getRandomIntegerInRange from './getRandomIntegerInRange';

/**
 * 所与の確率に応じて配列要素を返す
 * @param odds
 * @param values
 * @returns 当たった配列要素
 */
const getValueOfGivenPercentage = (
  odds: Array<number>,
  values: Array<any>,
): any => {
  if (odds.length !== values.length) throw new Error('Lengths are not equal.');
  const incrementor = (accumulator: number, currentValue: number): number =>
    accumulator + currentValue;
  if (odds.reduce(incrementor) !== 100)
    throw new Error('Total odds must be 100.');
  // 計算用の累加配列を作成
  const accumulatedOdds: Array<number> = odds.map((percentage, index) => {
    const oddsToAccumulate: Array<number> = odds
      .concat()
      .splice(index, odds.length);
    return oddsToAccumulate.reduce(incrementor);
  });
  const randomNumber: number = getRandomIntegerInRange(1, 100);
  let result: any;
  accumulatedOdds.forEach((percentage, index) => {
    // 確率の範囲内であればインデックスを更新
    if (percentage >= randomNumber) result = values[index];
  });
  return result;
};

export default getValueOfGivenPercentage;
