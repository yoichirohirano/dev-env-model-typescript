/**
 * YouTube動画を扱うクラス
 */
export default class YouTubePlayer {
  $player: HTMLElement;
  id: string;
  player: YT.Player;
  isPlaying: boolean;

  /**
   * constructor
   * @param $player プレーヤーを埋め込む要素
   * @param id 動画ID
   */
  constructor($player: HTMLElement, id: string) {
    this.$player = $player;
    this.id = id;
    this.player = null;
    this.isPlaying = false;

    this.initialize();
  }

  /**
   * 初期処理
   */
  async initialize() {
    const ready = await YouTubePlayer.loadYouTubeIFrameAPI();
    if (ready) this.player = this.createPlayer();
  }

  /**
   * プレーヤーを生成する
   */
  createPlayer() {
    // 複数の動画を動的に入れ替えるときは一度iframeを削除する
    if (this.player) this.player.destroy();
    return new YT.Player(this.$player, {
      width: '100%',
      height: '100%',
      videoId: this.id,
      events: {
        // onReadyイベントが走るまでthis.playerはundefinedとなる
        onReady: this.onReady.bind(this),
        onStateChange: event => {
          this.onStateChange(event);
        },
      },
      playerVars: {
        autoplay: 0,
        autohide: 1,
        controls: 1,
        loop: 1,
        modestbranding: 1,
        playlist: this.id,
        playsinline: 1,
        rel: 0,
        showinfo: 0,
        // color: 'white',
      },
    });
  }

  onReady() {
    // 消音しないとiOSで自動再生されない
    this.player.mute();
    this.player.playVideo();
  }

  onStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      this.isPlaying = true;
    } else if (event.data === YT.PlayerState.ENDED) {
      this.isPlaying = false;
    }
  }

  /**
   * 再生
   */
  play() {
    this.isPlaying = true;
    this.player.playVideo();
  }

  /**
   * 停止
   */
  stop() {
    this.isPlaying = false;
    this.player.stopVideo();
  }

  /**
   * YouTube Player API の初期処理
   * @returns 初期化結果
   */
  static loadYouTubeIFrameAPI(): Promise<boolean> {
    return new Promise(resolve => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
        resolve(true);
      };
    });
  }
}
