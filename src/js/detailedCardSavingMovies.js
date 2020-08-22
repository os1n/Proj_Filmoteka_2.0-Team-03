// import refs from './refs';
// import { identificationOfFilm } from './gallery-creation';
// let filmIdForDetails = ''; // os1n
// let filmsForDetailsSearch = []; //os1n
// let currentMovie = identificationOfFilm(filmIdForDetails, filmsForDetailsSearch, currentMovie);
// let watchedMovies = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []; //записываем в переменную данные из local storage

// //первое условие - кнопка 'add to watch', второе условие - если находит фильм, кнопка 'remove from watched'
// // if (watchedMovies.length === 0) {
// //   refs.addToWatchedBtn.innerHTML = 'Add to watched';
// // } else if (watchedMovies.find(movie => movie.id === id)) {
// //   refs.addToWatchedBtn.innerHTML = 'Remove from watched';
// // }

// export function onAddToWatchedHandler(event) {
//   if (event.target.innerHTML === 'Add to watched') {
//     // если 'add to watch', тогда добавляем фильм
//     watchedMovies.unshift(currentMovie);
//     refs.addToWatchedBtn.innerHTML = 'Remove from watched';
//   } else {
//     watchedMovies.pop(currentMovie); //если 'remove from watched', тогда удаляем фильм и меняем содержание кнопки
//     refs.addToWatchedBtn.innerHTML = 'Add to watched';
//   }
//   localStorage.setItem('watched', JSON.stringify(watched));
// }

// let queueMovies = localStorage.getItem('queue') ? JSON.parse(localStorage.getItem('queue')) : []; //записываем в переменную данные из local storage
// //первое условие - кнопка 'add to queue', второе условие - если находит фильм, кнопка 'remove from queue'
// // if (queueMovies.length === 0) {
// //   refs.addToQueuedBtn.innerHTML = 'Add to queue';
// // } else if (queueMovies.find(movie => movie.id === id)) {
// //   refs.addToQueueBtn.innerHTML = 'Remove from queue';
// // }

// export function onAddToQueueHandler(event) {
//   if (event.target.innerHTML === 'Add to queue') {
//     // если 'add to queue', тогда добавляем фильм
//     queueMovies.unshift(currentMovie);
//     refs.addToQueueBtn.innerHTML = 'Remove from queue';
//   } else {
//     queueMovies.pop(currentMovie); //если 'remove from queue', тогда удаляем фильм и меняем содержание кнопки
//     refs.addToQueueBtn.innerHTML = 'Add to queue';
//   }
//   localStorage.setItem('queue', JSON.stringify(queue));
// }
