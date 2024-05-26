import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}

const updateTime = throttle(event => localStorage.setItem('videoplayer-current-time', event.seconds), 1000);

player.on('timeupdate', event => updateTime(event));
