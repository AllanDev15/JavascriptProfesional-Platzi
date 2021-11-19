import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/autoPlay.js';
import AutoPause from './plugins/autoPause.js';

const video = document.querySelector('video');
const play = document.querySelector('#play');
const mute = document.querySelector('#mute');

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay(), new AutoPause()] });
play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();
