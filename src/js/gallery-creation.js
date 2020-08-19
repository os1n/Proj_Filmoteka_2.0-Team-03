import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import markupFilmDetails from './markup-film-details.js'; // DA
import refs from './refs.js';
import filmCardExample from './tmdb_api_answer.example.json'; //DA
const debounce = require('debounce');
let listOfCards = ''; // DA
let filmIdForDetails = ''; // DA
let filmsForDetailsSearch =[];
let arrToHbs = [];

const defaultGallery = galleryFetch.defaultFetchMovies();
defaultGallery.then(arr => injectMarkup(arr));
  let detailsCardRef = '';


function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);

 detailsCardRef = document.querySelectorAll('.poster-image-box');
 addEventsToCards(detailsCardRef);
 //detailsCardRef.addEventListener('click', console.log('click'));
 console.log(detailsCardRef);
 filmsForDetailsSearch = arr;
};

/*function detailsCardRefListenerCreation (ref){
  .addEventListener('click', event => {
    //refs.spinner.classList.remove('is-hidden');
    console.log('click');
    movieDetailsPage(data);
  }); */
  

/======/
  //console.log('injectMarkup');

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

function addEventsToCards(cardsList) {
  cardsList.forEach(el => el.addEventListener('click', event => {
    filmIdForDetails = event.originalTarget.id;
    arrToHbs = [];
    arrToHbs.push(filmCardExample);
    //identificationOfFilm(filmIdForDetails);
    //console.log(arrToHbs);       
    injectFilmDetails(arrToHbs);
    
  }));
}

export default injectMarkup;





function identificationOfFilm (id){
  //if(data.includes(id)){
  
    let filmForDetails = filmsForDetailsSearch.find(item  => item.id === id);
if(filmForDetails !== null) {
  arrToHbs.splice(0,1,filmForDetails);
}
console.log(filmForDetails);
console.log(arrToHbs);
return arrToHbs;
}//global arrToHbs

