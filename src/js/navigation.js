import refs from './refs';
import '../images/bg2.png';
import { defaultGalleryCreation } from './gallery-creation.js';
import { onWatchedMoviesHandler } from './myLibrary';
import fetchMovies from './fetchMovies';
import paginator from './paginator';

refs.homeBtn.addEventListener('click', onHomePageHandler);
refs.myLibraryBtn.addEventListener('click', onLibraryPageHandler);
refs.headerLogo.addEventListener('click', onLogoClickHandler);

function onHomePageHandler() {
  refs.homePage.classList.remove('hideSearch');
  refs.blockBtn.classList.add('hideBtn');
  refs.movieGallery.classList.remove('is-hidden');
  refs.libraryGallery.classList.add('is-hidden');
  refs.header.style.backgroundImage = 'url(./images/img2.png)';

  // при переходе с my Library вернет на ту же страницу прошлого поиска
  // также чтобы после неудачного поиска HOME вела на дефолтный поиск
  refs.searchInput.value != '' && paginator.totalResults != 0 ? fetchMovies(refs.searchInput.value) : defaultGalleryCreation();
}

function onLibraryPageHandler() {
  refs.pagination.innerHTML = '';
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
