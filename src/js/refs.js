const refs = {
  header: document.querySelector('.header'),
  headerLogo: document.querySelector('.header-logo'),
  searchInput: document.querySelector('.header-search'),
  searchIcon: document.querySelector('.search-icon'),
  movieGallery: document.querySelector('.movie-gallery'),
  libraryGallery: document.querySelector('.library-gallery'),
  spinner: document.querySelector('.spinner-grow'),
  pagination: document.getElementById('pagination'),
  watchedBtn: document.querySelector('button[data-action="watched"]'),
  queueBtn: document.querySelector('button[data-action="queue"]'),
  addToWatchedBtn: document.querySelector('button[data-action="add-to-watched"]'),
  addToQueueBtn: document.querySelector('button[data-action="add-to-queue"]'),

  //<<<<<<< HEAD

  //=======
  homeBtn: document.querySelector('.js-home-btn'),
  myLibraryBtn: document.querySelector('.js-my-library-btn'),
  homePage: document.querySelector('.blockHome'),
  blockBtn: document.querySelector('.blockBtn'),
  //>>>>>>> dev
};

export default refs;
