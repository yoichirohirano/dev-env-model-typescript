/**
 *
 * @param {string} string
 * @returns {boolean} result
 */

/**
 * Copy text to clipboard
 * @param text
 * @returns result
 */
export const copyToClipboard = (text: string): boolean => {
  const $el: HTMLTextAreaElement = document.createElement('textarea');
  const $body: HTMLElement = document.querySelector('body');

  $el.textContent = text;
  $body.appendChild($el);
  $el.select();
  const result = document.execCommand('copy');
  $body.removeChild($el);
  return result;
};
