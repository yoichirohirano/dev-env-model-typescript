const ua: string = navigator.userAgent.toLowerCase();

export const isSp: boolean = (() => /iphone|ipod|android/.test(ua))();

export const isIE: boolean = (() => /msie|trident/.test(ua))();

export const isIOS: boolean = (() => /iphone|ipad|ipod/.test(ua))();

export const isSafari: boolean = (() =>
  /safari/.test(ua) && !/chrome/.test(ua))();
