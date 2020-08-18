import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import refs from './refs.js';
const defaultGallery = galleryFetch.defaultFetchMovies();
defaultGallery.then(arr => injectMarkup(arr));
  let detailsCardRef = '';


function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
 detailsCardRef = document.querySelector('.poster-image-box');
 detailsCardRef.addEventListener('click', console.log('click'));
 console.log(detailsCardRef);

};
/*function detailsCardRefListenerCreation (ref){
  .addEventListener('click', event => {
    //refs.spinner.classList.remove('is-hidden');
    console.log('click');
    movieDetailsPage(data);
  }); */

  

