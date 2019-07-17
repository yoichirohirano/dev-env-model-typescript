import 'intersection-observer';

/**
 * 判定領域に対象が入ったらトリガー
 * @param {Object} params
 * @param {IntersectionObserverEntry} params.entry
 * @param {Function} params.callback
 * @returns {Boolean} callbackの実行有無
 */
export const intersectingTrigger = ({ entry, callback }) => {
  //   entry.target ターゲット
  //   entry.boundingClientRect ターゲットの位置寸法 ().top > 0 でターゲット上辺と判定できる
  //   entry.rootBounds rootMarginで指定されたビューポートの矩形
  //   entry.intersectionRect ビューポートとターゲットの重なる矩形
  //   entry.intersectionRatio 重なる矩形のビューポートに対する比率
  //   entry.isIntersecting 重なっているかどうか（ビューポート内かどうか）
  if (entry.isIntersecting) {
    callback(entry.target);
    return true;
  }
  return false;
};

/**
 * 判定領域に対象の上辺が入ったら(上からスクロールしてきた場合)トリガー
 * @param {Object} params
 * @param {IntersectionObserverEntry} params.entry
 * @param {Function} params.callback
 * @returns {Boolean} callbackの実行有無
 */
export const upperSideIntersectingTrigger = ({ entry, callback }) => {
  if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
    callback(entry.target);
    return true;
  }
  return false;
};

/**
 * 判定領域の下辺より上に対象がスクロールしたらonScrollDownをトリガー
 * 判定領域の下辺より下に対象がスクロールしたらonScrollUpをトリガー
 * @param {Object} params
 * @param {IntersectionObserverEntry} params.entry
 * @param {Function} params.onScrollDown
 * @param {Function} params.onScrollUp
 * @returns {Boolean} callbackの実行有無
 */
export const toggleTrigger = ({ entry, onScrollDown, onScrollUp }) => {
  if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
    onScrollDown(entry.target);
    return true;
  }
  if (!entry.isIntersecting && entry.boundingClientRect.top > entry.rootBounds.bottom) {
    onScrollUp(entry.target);
    return true;
  }
  return false;
};

/**
 * create IntersectionObserver object and start observing
 * @param {Object} params
 * @param {Array} params.$targets array of elements to be observed
 * @param {Function} params.judgeTrigger function to judge trigger
 * @param {Function} params.callback function to trigger
 * @param {Function} params.onScrollDown function to trigger when scrolling down
 * @param {Function} params.onScrollUp function to trigger when scrolling up
 * @param {Object} params.options
 * @param {Boolean} params.isOnce whether it trigger only once or not
 * @returns {IntersectionObserver}
 */
export const scrollObserve = ({
  $targets,
  judgeTrigger,
  callback,
  options,
  isOnce = false,
  onScrollDown,
  onScrollUp,
}) => {
  const observer = new IntersectionObserver((entries) => {
    // 閾値(thresholds)を前後するたびにトリガー
    // entriesには閾値を超えたターゲットのみが[]で入ってくる
    entries.forEach((entry) => {
      // callbackをトリガーしたかを判定
      const triggered = judgeTrigger({
        entry,
        callback,
        onScrollDown,
        onScrollUp,
      });
      // 一回のみのトリガーの場合は監視を解除
      if (isOnce && triggered) observer.unobserve(entry.target);
    });
  }, options);
  // ターゲットを登録
  [...$targets].forEach(($target) => {
    console.log($target);
    observer.observe($target);
  });
  return observer;
};
