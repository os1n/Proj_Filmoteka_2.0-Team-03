import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import markupFilmDetails from './markup-film-details.js'; // DA
import refs from './refs.js';
import filmCardExample from './tmdb_api_answer.example.json'; //DA
const debounce = require('debounce');
let listOfCards = ''; // DA
let filmIdForDetails = ''; // DA

const defaultGallery = galleryFetch.defaultFetchMovies();
defaultGallery.then(arr => injectMarkup(arr));

function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
  //console.log('injectMarkup');
  listOfCards = document.querySelectorAll('.poster-image-box');
  addEventsToCards(listOfCards);
  refs.pagination.classList.remove('is-hidden');
}

function injectFilmDetails(filmCardArr) {
  const markup = markupFilmDetails(filmCardArr);
  //console.log(markup);
  refs.movieGallery.innerHTML = '';
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
  refs.pagination.classList.add('is-hidden');
}

function addEventsToCards(cardsList) {
  cardsList.forEach(el => el.addEventListener('click', event => {
    filmIdForDetails = event.originalTarget.id;
    let arrToHbs = [];
    arrToHbs.push(filmCardExample);
    //console.log(arrToHbs);       
    injectFilmDetails(arrToHbs);
  }));
}

export default injectMarkup;
