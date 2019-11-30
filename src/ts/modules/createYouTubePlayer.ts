/**
 * initialize YouTube Player API
 * @returns result
 */
const loadYouTubeIFrameAPI = (): Promise<void> => {
  return new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
        resolve();
      };
    }
  });
};

/**
 * プレーヤーを生成する
 */
const getYTPlayer = ($player: HTMLElement, id: string): Promise<YT.Player> => {
  return new Promise((resolve) => {
    // 複数の動画を動的に入れ替えるときは一度iframeを削除する
    const player = new YT.Player($player, {
      width: '100%',
      height: '100%',
      videoId: id,
      events: {
        // onReadyイベントが走るまでplayerはundefinedとなる
        onReady: () => {
          resolve(player);
        },
        // onStateChange: (event) => {
        // },
      },
      playerVars: {
        autoplay: 0,
        autohide: 1,
        controls: 1,
        loop: 1,
        modestbranding: 1,
        playlist: id,
        playsinline: 1,
        rel: 0,
        showinfo: 0,
        // color: 'white',
      },
    });
  });
};

const createYouTubePlayer = async (
  $player: HTMLElement,
  id: string,
): Promise<YT.Player> => {
  await loadYouTubeIFrameAPI();
  const player: YT.Player = await getYTPlayer($player, id);
  return player;
};

export default createYouTubePlayer;
