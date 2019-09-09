/**
 * RequestAnimationFrameを初期化する
 * @returns ミリ秒単位で計測された現在日時のDOMHighResTimeStamp
 */
const initializeRAF = (): DOMHighResTimeStamp => {
  const requestAnimationFrame =
    window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  const now = window.performance.now;

  return now ? now.call(performance) : new Date().getTime();
};

export default initializeRAF;
