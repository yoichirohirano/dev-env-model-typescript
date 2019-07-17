/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2019/07/17
 * @link https://
 */

import '../scss/index.scss';
import CONFIG from './util/CONFIG';
import EventEmitter from './util/EventEmitter';
import { isSp } from './util/userAgent';
import { getURLSearchParams } from './util/functions';

export default class Index {
  /**
   * constructor
   */
  constructor() {
    EventEmitter.on('dd', () => {
      console.log(isSp);
    });
    EventEmitter.emit('dd');
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
