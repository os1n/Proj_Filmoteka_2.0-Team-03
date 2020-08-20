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

const defaultGallery = galleryFetch.defaultFetchMovies();
defaultGallery.then(arr => injectMarkup(arr));
let detailsCardRef = '';

function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);

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
}

//os1n
function addEventsToCards(cardsList) {
  cardsList.forEach(el =>
    el.addEventListener('click', event => {
      filmIdForDetails = event.originalTarget.id;
      arrToHbs = identificationOfFilm(filmIdForDetails, filmsForDetailsSearch, arrToHbs);
      injectFilmDetails(arrToHbs);
    }),
  );
}

export default injectMarkup; // os1n

//os1n
function identificationOfFilm(id, searchArray, output) { 
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
