// import anime from 'animejs';

import { toggleScroll } from '../helper/util';

export default class Modal {
  constructor(selector) {
    this.$content = document.querySelector('.modal__content');
    this.$overlay = document.querySelector('.modal__overlay');
    this.$openButtons = document.querySelectorAll(selector);
    this.$closeButton = document.querySelector('.modal__button-close');
    this.scroll = 0;
    this.isOpen = false;
    if (this.$openButtons) {
      this.init();
      this.addEvent();
    }
  }

  init() {
    this.$content.style.display = 'none';
    this.$overlay.style.display = 'none';
  }

  addEvent() {
    [...this.$openButtons].forEach(($openButton) => {
      $openButton.addEventListener('click', (e) => {
        this.open();
        e.preventDefault();
      });
    });
    this.$closeButton.addEventListener('click', this.close.bind(this));
    this.$overlay.addEventListener('click', this.close.bind(this));
    this.$content.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = true;
      // anime({
      //   targets: [this.$content, this.$overlay],
      //   opacity: [0, 1],
      //   duration: 1000,
      //   begin: () => {
      //     toggleScroll({ fix: true });
      //     this.$content.style.display = 'block';
      //     this.$overlay.style.display = 'block';
      //   },
      // });
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
      // anime({
      //   targets: [this.$content, this.$overlay],
      //   opacity: [1, 0],
      //   duration: 500,
      //   begin: () => {
      //     toggleScroll({ fix: false });
      //   },
      //   complete: () => {
      //     this.init();
      //   },
      // });
    }
  }

  // adjustBackground(isOpen) {
  //   // モーダル表示中の場合
  //   if (isOpen) {
  //     // 背景をスクロールさせない
  //     this.scroll = window.pageYOffset || document.documentElement.scrollTop;
  //     document.body.style.position = 'fixed';
  //     document.body.style.top = `${-this.scroll}px`;
  //     document.body.style.left = 0;
  //     document.body.style.right = 0;
  //     // モーダルを閉じた場合
  //   } else {
  //     // スクロール位置をもとに戻す
  //     document.body.style.position = '';
  //     document.body.style.top = '';
  //     document.body.style.left = '';
  //     document.body.style.right = '';
  //     window.scrollTo(0, this.scroll);
  //   }
  // }
}
