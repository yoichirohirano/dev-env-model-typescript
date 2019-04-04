const ua = navigator.userAgent.toLowerCase();

export const isIOS = (() => /iphone|ipad|ipod/.test(ua))();

export const isSafari = (() => /safari/.test(ua) && !/chrome/.test(ua))();

export const isSp = (() => /iphone|ipod|android/.test(ua))();

export const isIE = (() => /msie|trident/.test(ua))();
