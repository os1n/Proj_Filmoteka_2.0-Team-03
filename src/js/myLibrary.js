import refs from './refs';
import galleryMarkup from '../templates/movie-gallery.hbs';

refs.watchedBtn.addEventListener('click', onWatchedMoviesHandler);
refs.queueBtn.addEventListener('click', onQueueMoviesHandler);

function movieGalleryMarkup(data) {
  const markupGallery = galleryMarkup(data);
  refs.libraryGallery.insertAdjacentHTML('beforeend', markupGallery);
}

function onWatchedMoviesHandler() {
  let watchedMovieCards = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [];

  if (watchedMovieCards.length === 0) {
    refs.libraryGallery.innerHTML = 'Your list of watched movies is empty.';
  } else {
    watchedMovieCards.forEach(movie => {
      movieGalleryMarkup(movie);
    });
  }
  refs.watchedBtn.classList.add('button-active');
  refs.queueBtn.classList.remove('button-active');
}

function onQueueMoviesHandler() {
  let queueMovieCards = localStorage.getItem('queue') ? JSON.parse(localStorage.getItem('queue')) : [];

  if (queueMovieCards.length === 0) {
    refs.libraryGallery.innerHTML = 'Your list of queued movies is empty.';
  } else {
    queueMovieCards.forEach(movie => {
      movieGalleryMarkup(movie);
    });
  }
  refs.queueBtn.classList.add('button-active');
  refs.watchedBtn.classList.remove('button-active');
}
