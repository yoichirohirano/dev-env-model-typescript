/**
 * 文字列内の英数字をspanタグで囲む
 * @param string 文字列
 * @param className spanタグのクラス名
 * @returns HTML文字列
 * @throws Error
 */
const wrapAlphanumericWithSpan = (
  string: string,
  className: string = '',
): string => {
  if (!string) throw new Error('String is invalid.');
  return string.replace(
    /([a-zA-Z0-9,¥.-]+)/g,
    `<span class="${className}">$1</span>`,
  );
};

export default wrapAlphanumericWithSpan;
