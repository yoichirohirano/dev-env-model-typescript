import CONFIG from '../CONFIG';

/**
 * fetchのステータスがエラーならエラーを投げる
 * @param response
 * @returns response
 * @throws Error
 */
const handleErrors = (response: Response): Response => {
  if (response.ok) {
    return response;
  }
  switch (response.status) {
    case 400:
      throw new Error(CONFIG.ERROR[400]);
    case 401:
      throw new Error(CONFIG.ERROR[401]);
    case 403:
      throw new Error(CONFIG.ERROR[403]);
    case 404:
      throw new Error(CONFIG.ERROR[404]);
    case 500:
      throw new Error(CONFIG.ERROR[500]);
    case 502:
      throw new Error(CONFIG.ERROR[502]);
    default:
      throw new Error(CONFIG.ERROR.default);
  }
};

/**
 * Fetch HTTP request with handling server errors
 * @param url
 * @param options
 * @returns Promise object represents result data
 */
const fetchWithErrorHandling = <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  return new Promise((resolve, reject) => {
    // fetchの結果を非同期で返す
    fetch(url, options)
      // サーバサイドで発行されたエラーステータスを処理する
      .then(handleErrors)
      // 正常なレスポンスからJSONオブジェクトをパースする
      .then((response) => response.json())
      .then((data) => resolve(data))
      // ネットワーク周りなどのリクエスト以前の段階でのエラーを処理する
      .catch((error) => {
        reject(error);
      });
  });
};

export default fetchWithErrorHandling;
