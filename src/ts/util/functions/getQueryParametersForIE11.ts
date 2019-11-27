/**
 * get QueryParameters as Object instead of using URL.searchParam
 * @returns QueryParameters
 */
interface QueryParametersObject {
  [key: string]: string;
}

const getQueryParametersForIE11 = (): QueryParametersObject => {
  const parameter: QueryParametersObject = {};
  const searchParam: Array<string> = window.location.search
    .replace(/^\?/, '')
    .split('&');
  searchParam.forEach((param) => {
    const key: string = param.split('=')[0];
    const value: string = param.split('=')[1];
    parameter[key] = value;
  });
  return parameter;
};

export default getQueryParametersForIE11;
