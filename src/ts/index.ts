/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2019/07/17
 * @link https://
 */

import '../scss/index.scss';
import CONFIG from './util/CONFIG';
import EventEmitter from './util/EventEmitter';

export default class Index {
  private errorCode: string = CONFIG.ERROR[404];
  /**
   * constructor
   */
  constructor() {
    EventEmitter.on('test', () => {
      console.log(this.errorCode);
    });
    EventEmitter.emit('test');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL_INDEX = window.DEV_ENV_MODEL_INDEX || new Index();
});
