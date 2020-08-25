import fetchGallery from './gallery.js';
import movieGalleryMarkup from './gallery-creation';

export default function startRender(results) {
  const newArrOfMovies = fetchGallery.getGenres(results);
  movieGalleryMarkup(newArrOfMovies);
}
