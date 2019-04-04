/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2018/12/03
 * @link https://
 */

import '../scss/index.scss';

export default class Index {
  /**
   * constructor
   */
  constructor() {
    console.log(Index.getNumber());
  }

  static getNumber() {
    const num: number = 12;
    return num;
  }
}

declare global {
  interface Window {
    DEV_ENV_MODEL: any;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
