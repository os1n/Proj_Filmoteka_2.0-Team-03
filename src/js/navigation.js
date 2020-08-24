import refs from './refs';
import { defaultGalleryCreation } from './gallery-creation.js';
import { onWatchedMoviesHandler } from './myLibrary';

refs.homeBtn.addEventListener('click', onHomePageHandler);
refs.myLibraryBtn.addEventListener('click', onLibraryPageHandler);
refs.headerLogo.addEventListener('click', onLogoClickHandler);

function onHomePageHandler() {
  refs.homePage.classList.remove('hideSearch');
  refs.blockBtn.classList.add('hideBtn');
  refs.movieGallery.classList.remove('is-hidden');
  refs.libraryGallery.classList.add('is-hidden');
  refs.header.style.backgroundImage = 'url(./images/img2.png)';
  defaultGalleryCreation();
}

function onLibraryPageHandler() {
  refs.homePage.classList.add('hideSearch');
  refs.blockBtn.classList.remove('hideBtn');
  refs.movieGallery.classList.add('is-hidden');
  refs.libraryGallery.classList.remove('is-hidden');
  refs.header.style.backgroundImage = 'url(./images/bg2.png)';
  onWatchedMoviesHandler();
}

function onLogoClickHandler() {
  onHomePageHandler();
}
