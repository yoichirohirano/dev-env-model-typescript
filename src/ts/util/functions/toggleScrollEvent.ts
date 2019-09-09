/**
 * スクロールを固定/固定解除する
 * @param fix trueで固定、falseで解除
 */
const toggleScrollEvent = (fix: boolean) => {
  const cancelEvent = (e: Event): void => {
    e.preventDefault();
  };
  if (fix) {
    // optionを全く同じにしないとIEでremoveされない
    document.addEventListener('wheel', cancelEvent, false);
    document.addEventListener('touchmove', cancelEvent, false);
  } else {
    document.removeEventListener('wheel', cancelEvent, false);
    document.removeEventListener('touchmove', cancelEvent, false);
  }
};

export default toggleScrollEvent;
