/**
 * img要素からBase64形式の文字列を出力する
 * @param $image HTMLImageElement
 * @param mimeType "image/png", "image/jpeg" など
 * @returns "data:image/jpeg;base64,XXXXXX..." など
 */
const getBase64FromImageElement = (
  $image: HTMLImageElement,
  mimeType: string = 'image/jpeg',
): string => {
  // New Canvas
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = $image.width;
  canvas.height = $image.height;
  // Draw Image
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  ctx.drawImage($image, 0, 0);
  // To Base64
  return canvas.toDataURL(mimeType);
};

export default getBase64FromImageElement;
