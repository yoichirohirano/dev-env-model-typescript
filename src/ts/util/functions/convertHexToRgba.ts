/**
 * convert Hex format to RGB
 * @param hex
 * @param alpha
 */
const convertHexToRgba = (hex: string, alpha: number = 1):string | null => {
  let r = null;
  let g = null;
  let b = null;
  const a = (alpha >= 0 && alpha <= 1) ? alpha : 1;
  const matchListLong = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  const matchListShort = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);

  if (matchListLong) {
    r = parseInt(matchListLong[1], 16);
    g = parseInt(matchListLong[2], 16);
    b = parseInt(matchListLong[3], 16);
  } else if (matchListShort) {
    r = 0x11 * parseInt(matchListShort[1], 16);
    g = 0x11 * parseInt(matchListShort[2], 16);
    b = 0x11 * parseInt(matchListShort[3], 16);
  } else {
    return null;
  }

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export default convertHexToRgba;
