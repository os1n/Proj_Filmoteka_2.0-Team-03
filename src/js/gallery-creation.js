import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import refs from './refs.js';
const gallery1 = galleryFetch.defaultFetchMovies();
gallery1.then(arr => injectMarkup(arr));

function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
}
