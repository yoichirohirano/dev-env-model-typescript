/**
 * 住所
 */
export interface address {
  postal_code: string; // 郵便番号
  state: string; // 都道府県
  city: string; // 市区郡
  town: string; // 町村名、丁目
  line1: string; // 番地
}

/**
 * 生年月日
 */
export interface dob {
  day: string;
  month: string;
  year: string;
}

declare global {
  interface Window {
    DEV_ENV_MODEL_INDEX: any;
    // YouTube IFrame Player API
    onYouTubeIframeAPIReady(): void;
  }
}
