/**
 * Create URLSearchParams Instance from Object
 * @param param key:value
 * @returns URLSearchParams
 */
const createURLSearchParamsFromObject = (
  param: URLSearchParamsObject,
): URLSearchParams => {
  const urlSearchParams = new URLSearchParams();
  Object.entries(param).forEach(([key, value]) => {
    urlSearchParams.append(key, value);
  });
  return urlSearchParams;
};

export default createURLSearchParamsFromObject;

type URLSearchParamsObject = {
  [key: string]: string;
};
