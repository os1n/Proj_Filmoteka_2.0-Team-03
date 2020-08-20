import refs from './refs';

refs.homeBtn.addEventListener('click', onHomePageHandler);
refs.myLibraryBtn.addEventListener('click', onLibraryPageHandler);
refs.headerLogo.addEventListener('click', onLogoClickHandler);

function onHomePageHandler() {
  refs.homePage.classList.remove('hideSearch');
  refs.blockBtn.classList.add('hideBtn');
  refs.movieGallery.classList.remove('is-hidden');
  refs.libraryGallery.classList.add('is-hidden');
  refs.header.style.backgroundImage = 'url(./images/img2.png)';
}

function onLibraryPageHandler() {
  refs.homePage.classList.add('hideSearch');
  refs.blockBtn.classList.remove('hideBtn');
  refs.movieGallery.classList.add('is-hidden');
  refs.libraryGallery.classList.remove('is-hidden');
  refs.header.style.backgroundImage = 'url(./images/bg2.png)';
}

function onLogoClickHandler() {
  onHomePageHandler();
}
