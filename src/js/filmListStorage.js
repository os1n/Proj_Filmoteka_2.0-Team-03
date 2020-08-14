import refs from './refs';

refs.watchedBtn.addEventListener('click', onWatchedFilmsHandler);
refs.queueBtn.addEventListener('click', onQueueFilmsHandler);

let libraryCards = document.querySelector('.library-container'); //если фильмов нет, сюда кидаем то, что в innerHTML
const createFilmCard = {}; //отрисовываем карточку фильма

function onWatchedFilmsHandler() {
  let watchedFilmCards = localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [];

  if (watchedFilmCards.length === 0) {
    libraryCards.innerHTML = 'Your list of watched movies is empty.';
  } else {
    watchedFilmCards.forEach(film => {
      createFilmCard(film);
    });
  }
  refs.watchedBtn.classList.add('button-active');
  refs.queueBtn.classList.remove('button-active');
}

function onQueueFilmsHandler() {
  let queueFilmCards = localStorage.getItem('queue')
    ? JSON.parse(localStorage.getItem('queue'))
    : [];

  if (queueFilmCards.length === 0) {
    libraryCards.innerHTML = 'Your list of queued movies is empty.';
  } else {
    queueFilmCards.forEach(film => {
      createFilmCard(film);
    });
  }
  refs.queueBtn.classList.add('button-active');
  refs.watchedBtn.classList.remove('button-active');
}
