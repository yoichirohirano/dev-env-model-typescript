/**
 * スクロールイベントにおいて passive:true のオプションが使えるかどうかを判定する
 * @returns 判定結果
 */
const passiveEventListenersAvailable = (): boolean => {
  let result: boolean = false;
  const opts =
    Object.defineProperty &&
    Object.defineProperty({}, 'passive', {
      get: () => {
        result = true;
      },
    });
  document.addEventListener('test', () => {}, opts);

  return result;
};

export default passiveEventListenersAvailable;
