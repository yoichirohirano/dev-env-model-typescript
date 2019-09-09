/**
 * Create URLSearchParams Instance from Object
 * @param params key:value
 * @returns URLSearchParams
 */
const createURLSearchParams = (params: Object): URLSearchParams => {
  const urlSearchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    urlSearchParams.append(key, value);
  });
  return urlSearchParams;
};

export default createURLSearchParams;
