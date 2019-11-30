/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2019/07/17
 * @link https://
 */

import '../scss/index.scss';
import CONFIG from './util/CONFIG';
// import EventEmitter from './util/EventEmitter';
import createYouTubePlayer from './modules/createYouTubePlayer';

export default class Index {
  private errorCode: string = CONFIG.ERROR[404];

  private player: YT.Player | null;

  /**
   * constructor
   */
  constructor() {
    this.player = null;
    this.play();
  }

  async play() {
    const $el = document.querySelector('.player') as HTMLElement;
    this.player = await createYouTubePlayer($el, 'tUe6YedzjlM');
    this.player.playVideo();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL_INDEX = window.DEV_ENV_MODEL_INDEX || new Index();
});
