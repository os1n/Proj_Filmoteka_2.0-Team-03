import refs from './refs';
import galleryMarkup from '../templates/movie-gallery.hbs';

refs.watchedBtn.addEventListener('click', onWatchedMoviesHandler);
refs.queueBtn.addEventListener('click', onQueueMoviesHandler);

function movieGalleryMarkup(data) {
  const markupGallery = galleryMarkup(data);
  refs.libraryGallery.insertAdjacentHTML('beforeend', markupGallery);
}

// function onWatchedMoviesHandler() {
//   // let watchedMovieCards = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [];
//   let watchedMovieCards = JSON.parse(localStorage.getItem('watched'));
//   console.log(watchedMovieCards, 'kyky');
//   if (watchedMovieCards.length === 0) {
//     refs.libraryGallery.innerHTML = 'Your list of watched movies is empty.';
//   } else {
//     // refs.libraryGallery.innerHTML = '';
//     // watchedMovieCards.forEach(movie => {
//     //   movieGalleryMarkup(movie);
//     // });
//     movieGalleryMarkup(watchedMovieCards);
//     // console.log(watchedMovieCards, 'kyky2');
//   }
//   localStorage.setItem('watched', JSON.stringify(watchedMovieCards));

//   refs.watchedBtn.classList.add('button-active');
//   refs.queueBtn.classList.remove('button-active');
// }

// function onQueueMoviesHandler() {
//   let queueMovieCards = JSON.parse(localStorage.getItem('queue'));
//   console.log(queueMovieCards);
//   if (queueMovieCards.length === 0) {
//     refs.libraryGallery.innerHTML = 'Your list of queued movies is empty.';
//   } else {
//     refs.libraryGallery.innerHTML = '';
//     // queueMovieCards.forEach(movie => {
//     //   movieGalleryMarkup(movie);
//     // });
//     movieGalleryMarkup(queueMovieCards);
//   }
//   refs.queueBtn.classList.add('button-active');
//   refs.watchedBtn.classList.remove('button-active');
// }

// let libraryMovieCards = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [];

// if (libraryMovieCards.length === 0) {
//   refs.libraryGallery.innerHTML = 'Your library list of movies is empty.';
// } else {
//   refs.libraryGallery.innerHTML = '';
//   libraryMovieCards.forEach(movie => {
//     movieGalleryMarkup(movie);
//   });
// }
export function onWatchedMoviesHandler() {
  let watchedMovieCards = localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [];
  if (watchedMovieCards.length == 0) {
    refs.libraryGallery.innerHTML = 'Your list of watched movies is empty.';
  } else {
    refs.libraryGallery.innerHTML = '';
    watchedMovieCards.forEach(movie => {
      movieGalleryMarkup(movie);
    });
  }
  refs.watchedBtn.classList.add('activeBtn');
  refs.queueBtn.classList.remove('activeBtn');
}

function onQueueMoviesHandler() {
  let queueMovieCards = localStorage.getItem('queue') ? JSON.parse(localStorage.getItem('queue')) : [];
  // console.log(queueMovieCards);
  if (queueMovieCards.length === 0) {
    refs.libraryGallery.innerHTML = 'Your list of queued movies is empty.';
  } else {
    refs.libraryGallery.innerHTML = '';
    queueMovieCards.forEach(movie => {
      movieGalleryMarkup(movie);
    });
  }
  refs.queueBtn.classList.add('activeBtn');
  refs.watchedBtn.classList.remove('activeBtn');
}
