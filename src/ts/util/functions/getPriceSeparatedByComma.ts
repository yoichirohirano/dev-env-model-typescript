/**
 * 金額をカンマ区切りの文字列にする
 * @param price
 * @returns result
 */
const getPriceSeparatedByComma = (price: number): string => {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
};

export default getPriceSeparatedByComma;
