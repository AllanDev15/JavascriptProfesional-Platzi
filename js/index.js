import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/autoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('button');

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] });
button.onclick = () => player.togglePlay();
