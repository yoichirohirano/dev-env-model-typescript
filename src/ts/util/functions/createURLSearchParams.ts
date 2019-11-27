/**
 * Create URLSearchParam Instance from Object
 * @param param key:value
 * @returns URLSearchParam
 */
const createURLSearchParam = (param: obj): URLSearchParam => {
  const urlSearchParam = new URLSearchParam();
  Object.entries(param).forEach(([key, value]) => {
    urlSearchParam.append(key, value);
  });
  return urlSearchParam;
};

export default createURLSearchParam;

type obj<T> = {
  [key: string]: T;
};
