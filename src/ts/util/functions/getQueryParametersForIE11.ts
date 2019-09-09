/**
 * get QueryParameters as Object instead of using URL.searchParams
 * @returns QueryParameters
 */
const getQueryParametersForIE11 = () => {
  const parameter: Object = {};
  const searchParams: Array<string> = window.location.search
    .replace(/^\?/, '')
    .split('&');
  searchParams.forEach(param => {
    const key = param.split('=')[0];
    const value = param.split('=')[1];
    parameter[key] = value;
  });
  return parameter;
};

export default getQueryParametersForIE11;
