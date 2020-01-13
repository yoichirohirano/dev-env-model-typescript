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
