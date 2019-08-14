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
  testNumber: number = 11;
  /**
   * constructor
   */
  constructor() {
    EventEmitter.on('test', () => {
      console.log(this.testNumber);
    });
    EventEmitter.emit('test');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL_INDEX = window.DEV_ENV_MODEL_INDEX || new Index();
});
