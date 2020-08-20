import refs from './refs';
// import { onEventListenerHandler } from './gallery-creation';

let watchedMovies = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [];

// if (watchedMovies.length === 0) {
//   refs.addToWatchedBtn.innerHTML = 'Add to watched';
// } else if (watchedMovies.find(movie => movie.id === id)) {
//   refs.addToWatchedBtn.innerHTML = 'Remove from watched';
// }

export function onAddToWatchedHandler(event) {
  if (event.target.innerHTML === 'Add to watched') {
    watchedMovies.unshift(currentMovie);
    refs.addToWatchedBtn.innerHTML = 'Remove from watched';
  } else {
    watchedMovies.shift(currentMovie);
    refs.addToWatchedBtn.innerHTML = 'Add to watched';
  }
  localStorage.setItem('watched', JSON.stringify(watched));
}

let queueMovies = localStorage.getItem('queue') ? JSON.parse(localStorage.getItem('queue')) : [];

// if (queueMovies.length === 0) {
//   refs.addToQueuedBtn.innerHTML = 'Add to queue';
// } else if (queueMovies.find(movie => movie.id === id)) {
//   refs.addToQueueBtn.innerHTML = 'Remove from queue';
// }

export function onAddToQueueHandler(event) {
  if (event.target.innerHTML === 'Add to queue') {
    queueMovies.unshift(currentMovie);
    refs.addToQueueBtn.innerHTML = 'Remove from queue';
  } else {
    queueMovies.shift(currentMovie);
    refs.addToQueueBtn.innerHTML = 'Add to queue';
  }
  localStorage.setItem('queue', JSON.stringify(queue));
}
