import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import refs from './refs.js';
const debounce = require('debounce');
let listOfCards = '';

const defaultGallery = galleryFetch.defaultFetchMovies();
defaultGallery.then(arr => injectMarkup(arr));

function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
  
  listOfCards = document.querySelectorAll('.poster-image-box');
  addEventsToCards(listOfCards);
  //console.log(listOfCards);
}

function addEventsToCards(cardsList) {
  cardsList.forEach(el => el.addEventListener('click', event => {
    console.log(event);
  }));
}