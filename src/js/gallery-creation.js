import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import markupFilmDetails from './markup-film-details.js'; // os1n
import refs from './refs.js';
// import { onAddToWatchedHandler } from './detailedCardSavingMovies';
// import { onAddToQueueHandler } from './detailedCardSavingMovies';
import filmCardExample from './tmdb_api_answer.example.json'; //os1n
const debounce = require('debounce');
let listOfCards = ''; // os1n
let filmIdForDetails = ''; // os1n
let filmsForDetailsSearch = []; //os1n
let arrToHbs = []; //os1n

export function defaultGalleryCreation() {
  const defaultGallery = galleryFetch.defaultFetchMovies();
  defaultGallery.then(arr => injectMarkup(arr));
}

defaultGalleryCreation();

function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.innerHTML = '';
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
  let detailsCardRef = '';
  detailsCardRef = document.querySelectorAll('.poster-image-box');
  addEventsToCards(detailsCardRef);
  //console.log(detailsCardRef);
  filmsForDetailsSearch = arr;
}

listOfCards = document.querySelectorAll('.poster-image-box');
addEventsToCards(listOfCards);
refs.pagination.classList.remove('is-hidden');

function injectFilmDetails(filmCardArr) {
  const markup = markupFilmDetails(filmCardArr);
  //console.log(markup);
  refs.movieGallery.innerHTML = '';
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
  refs.pagination.classList.add('is-hidden');
  let addToWatchedBtn = document.querySelector('button[data-action="add-to-watched"]');
  addToWatchedBtn.addEventListener('click', onAddToWatchedHandler);
  let addToQueueBtn = document.querySelector('button[data-action="add-to-queue"]');
  addToQueueBtn.addEventListener('click', onAddToQueueHandler);

  let watchedMovies = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []; //записываем в переменную данные из local storage
  let currentMovie = identificationOfFilm(filmIdForDetails, filmsForDetailsSearch, currentMovie);

  // первое условие - кнопка 'add to watch', второе условие - если находит фильм, кнопка 'remove from watched'
  // if (watchedMovies.length === 0) {
  //   addToWatchedBtn.innerHTML = 'Add to watched';
  // } else if (identificationOfFilm(filmIdForDetails, filmsForDetailsSearch, currentMovie)) {
  //   addToWatchedBtn.innerHTML = 'Remove from watched';
  // }

  function onAddToWatchedHandler(event) {
    event.preventDefault();
    if (event.target.innerHTML === 'Add to watched') {
      // если 'add to watch', тогда добавляем фильм
      watchedMovies.unshift(currentMovie);
      addToWatchedBtn.innerHTML = 'Remove from watched';
    } else {
      watchedMovies.shift(currentMovie); //если 'remove from watched', тогда удаляем фильм и меняем содержание кнопки
      addToWatchedBtn.innerHTML = 'Add to watched';
    }
    localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }

  let queueMovies = localStorage.getItem('queue') ? JSON.parse(localStorage.getItem('queue')) : []; //записываем в переменную данные из local storage
  // первое условие - кнопка 'add to queue', второе условие - если находит фильм, кнопка 'remove from queue'
  // if (queueMovies.length === 0) {
  //   addToQueueBtn.innerHTML = 'Add to queue';
  // } else if (queueMovies.find(movie => movie.id === id)) {
  //   refs.addToQueueBtn.innerHTML = 'Remove from queue';
  // }

  function onAddToQueueHandler(event) {
    if (event.target.innerHTML === 'Add to queue') {
      // если 'add to queue', тогда добавляем фильм
      queueMovies.unshift(currentMovie);
      addToQueueBtn.innerHTML = 'Remove from queue';
    } else {
      queueMovies.pop(currentMovie); //если 'remove from queue', тогда удаляем фильм и меняем содержание кнопки
      addToQueueBtn.innerHTML = 'Add to queue';
    }
    localStorage.setItem('queue', JSON.stringify(queueMovies));
  }
}

//os1n
function addEventsToCards(cardsList) {
  cardsList.forEach(el =>
    el.addEventListener('click', event => {
      //console.log(event);
      filmIdForDetails = event.target.id;
      arrToHbs = identificationOfFilm(filmIdForDetails, filmsForDetailsSearch, arrToHbs);
      injectFilmDetails(arrToHbs);
    }),
  );
}

//os1n
export function identificationOfFilm(id, searchArray, output) {
  //console.log(id);
  output = [];
  searchArray.forEach(item => {
    if (item.id === parseInt(id)) {
      output.push(item);
      //console.log(item);
    }
  });
  return output;
}
export default injectMarkup; // os1n
