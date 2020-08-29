import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import markupFilmDetails from './markup-film-details.js'; // os1n
import refs from './refs.js';
import filmCardExample from './tmdb_api_answer.example.json'; //os1n
const debounce = require('debounce');
let listOfCards = ''; // os1n
let filmIdForDetails = ''; // os1n
let filmsForDetailsSearch = []; //os1n
let arrToHbs = []; //os1n

//local storage
// localStorage.setItem('watched', JSON.stringify([]));
// localStorage.setItem('queue', JSON.stringify([]));
// console.dir(JSON.parse(localStorage.getItem('watched')));

export function defaultGalleryCreation() {
  const defaultGallery = galleryFetch.defaultFetchMovies();
  defaultGallery.then(arr => injectMarkup(arr));
}

// defaultGalleryCreation();

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

  let watchedMovies = JSON.parse(localStorage.getItem('watched')) ? JSON.parse(localStorage.getItem('watched')) : [];
  // let watchedMovies;
  // if (!localStorage.getItem('watched')) {
  //   watchedMovies = [];
  //   localStorage.setItem('watched', JSON.stringify(watchedMovies));
  // } else {
  //   watchedMovies = JSON.parse(localStorage.getItem('watched'));
  // }

  let currentMovie = identificationOfFilm(filmIdForDetails, filmsForDetailsSearch, currentMovie);
  let id = event.target.id;

  // let watchedMoviesResult = Object.prototype.toString.call(watchedMovies);
  console.log(typeof watchedMovies, 'watchedMoviesResult');
  console.log(watchedMovies, 'watchedMoviesResult');
  // console.log(typeof watchedMoviesResult, '- typeof watchedMoviesResult');

  for (const movie in watchedMovies) {
    console.log(parseInt(watchedMovies[movie][0].id) === parseInt(id), watchedMovies[movie][0].id, parseInt(id), 'ID');
    if (parseInt(watchedMovies[movie][0].id) === parseInt(id)) {
      console.log('Меняю кнопку');
      addToWatchedBtn.innerHTML = 'Remove from watched';
    } else if (watchedMovies.length === 0) {
      addToWatchedBtn.innerHTML = 'Add to watched';
    } else {
      addToWatchedBtn.innerHTML = 'Add to watched';
    }
  }

  // else if (watchedMoviesResult.find(movie => parseInt(movie.id) === parseInt(id))) {
  //   // console.log(
  //   //   watchedMovies.find(movie => parseInt(movie.id) === parseInt(id)),
  //   //   'watched movies 2',
  //   // );
  //   console.log(id, 'currentMovieBla');
  //   addToWatchedBtn.innerHTML = 'Remove from watched';
  // }
  // else {
  //
  // }

  function onAddToWatchedHandler(event) {
    // if (!watchedMovies) {
    //   watchedMovies = [];
    //   console.log(watchedMovies, 'handler');
    // }
    if (event.target.innerHTML === 'Add to watched') {
      // если 'add to watch', тогда добавляем фильм
      addToWatchedBtn.innerHTML = 'Remove from watched';
      // console.log(watchedMovies, 'kyky');
      watchedMovies.push(currentMovie);
      localStorage.setItem('watched', JSON.stringify(watchedMovies));
    } else {
      watchedMovies.splice(currentMovie, 1);
      addToWatchedBtn.innerHTML = 'Add to watched';
    }
    localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }

  let queueMovies = JSON.parse(localStorage.getItem('queue')) ? JSON.parse(localStorage.getItem('queue')) : [];

  if (queueMovies.length === 0) {
    addToQueueBtn.innerHTML = 'Add to queue';
  } else if (queueMovies.find(movie => movie.id === id)) {
    addToQueueBtn.innerHTML = 'Remove from queue';
  }

  function onAddToQueueHandler(event) {
    if (event.target.innerHTML === 'Add to queue') {
      queueMovies.unshift(currentMovie);
      addToQueueBtn.innerHTML = 'Remove from queue';
    } else {
      queueMovies.shift(currentMovie);
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
  output = [];
  searchArray.forEach(item => {
    if (item.id === parseInt(id)) {
      output.splice(0, 1, item);
      //console.log(output.length);
    }
  });
  return output;
}
export default injectMarkup; // os1n
