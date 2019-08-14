import 'intersection-observer';

interface Callbacks {
  onScrollDownIn?: Function;
  onScrollDownOut?: Function;
  onScrollUpIn?: Function;
  onScrollUpOut?: Function;
}

/**
 * トリガーされ得る4つのタイミングそれぞれの関数を引数に取り、関数を実行したらtrueを返す
 * 関数のないタイミングについてはfalseを返す
 * @param entry
 * @param callbacks
 * @returns 関数が実行されたか
 */
const callbackTriggered = (
  entry: IntersectionObserverEntry,
  callbacks: Callbacks,
): boolean => {
  // 1.下スクロール時/ターゲットIN
  if (
    callbacks.onScrollDownIn &&
    entry.isIntersecting &&
    entry.boundingClientRect.top > 0
  ) {
    callbacks.onScrollDownIn(entry.target);
    return true;
    // 2.下スクロール時/ターゲットOUT
  } else if (
    callbacks.onScrollDownOut &&
    !entry.isIntersecting &&
    entry.boundingClientRect.top < 0
  ) {
    callbacks.onScrollDownOut(entry.target);
    return true;
    // 3. 上スクロール時/ターゲットIN
  } else if (
    callbacks.onScrollUpIn &&
    entry.isIntersecting &&
    entry.boundingClientRect.top < 0
  ) {
    callbacks.onScrollUpIn(entry.target);
    return true;
    // 4. 上スクロール時/ターゲットOUT
  } else if (
    callbacks.onScrollUpOut &&
    !entry.isIntersecting &&
    entry.boundingClientRect.top > 0
  ) {
    callbacks.onScrollUpOut(entry.target);
    return true;
  } else {
    return false;
  }
};

/**
 * create IntersectionObserver object
 * @param callbacks functions to be triggered
 * @param isOnce whether it trigger only once or not
 * @param options IntersectionObserver option
 * @returns scrollObserver
 */
export const getScrollObserver = (
  callbacks: Callbacks,
  isOnce: boolean = false,
  options: Object = {
    root: null,
    rootMargin: '0% 0% 0% 0%',
    threshold: 0,
  },
): IntersectionObserver => {
  // オブザーバーを定義
  const observer = new IntersectionObserver(entries => {
    // 閾値(thresholds)を前後するたびにトリガー
    // entriesには閾値を超えたターゲットのみが[]で入ってくる
    entries.forEach(entry => {
      // callbackをトリガー(したか結果を格納)
      const triggered = callbackTriggered(entry, callbacks);
      // 一回のみのトリガーの場合は監視を解除
      if (isOnce && triggered) observer.unobserve(entry.target);
    });
  }, options);

  return observer;
};

export default getScrollObserver;
