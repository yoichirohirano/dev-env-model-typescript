/**
 * 画像のパスからimg要素を生成する
 * @param src 画像のパス
 * @returns img要素
 * @throws Error
 */
const createImageElement = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const $img: HTMLImageElement = new Image();
    $img.onload = () => resolve($img);
    $img.onerror = e => reject(e);
    $img.src = src;
  });
};

export default createImageElement;
