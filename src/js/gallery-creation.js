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
localStorage.setItem('watched', JSON.stringify([]));
localStorage.setItem('queue', JSON.stringify([]));
console.dir(JSON.parse(localStorage.getItem('watched')));

export function defaultGalleryCreation() {
  const defaultGallery = galleryFetch.defaultFetchMovies();
  defaultGallery.then(arr => injectMarkup(arr));
}

defaultGalleryCreation();

function injectMarkup(arr) {
  console.log('type of arr', typeof arr);
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
