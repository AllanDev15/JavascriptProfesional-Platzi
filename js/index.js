import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/autoPlay.js';

const video = document.querySelector('video');
const play = document.querySelector('#play');
const mute = document.querySelector('#mute');

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] });
play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();
