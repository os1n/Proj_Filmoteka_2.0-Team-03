import genres from './jsons/genre.json';
import galleryFetch from './gallery.js';
import markupGallery from './markup-gallery.js';
import refs from './refs.js';
const gallery1 = galleryFetch.defaultFetchMovies();
console.log(gallery1);
gallery1.then(arr => getGenres(arr)).then(arr => injectMarkup(arr));

function getGenres(arr) {
  arr.forEach(element => {
    element.genres = [];

    element.genre_ids.forEach(genre_id => {
      genres.forEach(genre => {
        // console.log(genre, genre_id);

        if (genre_id === genre.id) {
          //   console.log(genre.name);
          element.genres.push(genre.name);
          //   console.log(element.genres);
        }
      });
    });
  });
  console.log(arr);
  return arr;
}
function injectMarkup(arr) {
  const markup = markupGallery(arr);
  refs.movieGallery.insertAdjacentHTML('beforeend', markup);
}
