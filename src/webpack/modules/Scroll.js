/**
 * @author Yoichiro Hirano
 * @description
 * @created 2019/01/25
 * @link
 */
import 'intersection-observer';

export default class Scroll {
  constructor() {
    this.$target = document.querySelector('');

    this.initializeView();
    this.observe();
  }

  /**
   * 初期表示
   */
  initializeView() {
    this.$target.style.opacity = 0;
  }

  /**
   * スクロール監視
   */
  observe() {
    this.observer = Scroll.makeOneTimeObserver({
      callback: Scroll.show,
      options: {
        root: null,
        rootMargin: '0% 0% -30% 0%',
        threshold: 0,
      },
    });
    this.observer.observe(this.$target);
  }

  /**
   * make IntersectionObserver object which is triggered once
   * @param {object} params
   * @param {function} params.callback function to trigger
   * @param {object} params.options
   * @returns {IntersectionObserver}
   */
  static makeOneTimeObserver({ callback, options }) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    return observer;
  }

  static show($target) {
    // animation
    console.log($target);
  }
}
