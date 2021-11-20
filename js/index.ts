import MediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/autoPlay';
import AutoPause from './plugins/autoPause';

const video = document.querySelector('video');
const play: HTMLElement = document.querySelector('#play');
const mute: HTMLElement = document.querySelector('#mute');

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay(), new AutoPause()] });
play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log(error.message);
  });
}
