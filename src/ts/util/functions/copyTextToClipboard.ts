/**
 * Copy text to clipboard (usable for IE)
 * @param text
 * @returns result
 */
const copyTextToClipboard = (text: string): boolean => {
  const $el: HTMLTextAreaElement = document.createElement('textarea');
  const $body: HTMLElement | null = document.querySelector('body');
  let result: boolean = false;

  if ($body) {
    $el.textContent = text;
    $body.appendChild($el);
    $el.select();
    result = document.execCommand('copy');
    $body.removeChild($el);
  }
  return result;
};

export default copyTextToClipboard;
