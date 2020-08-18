import refs from './refs';

refs.homeBtn.addEventListener('click', onHomePageHandler);
refs.myLibraryBtn.addEventListener('click', onLibraryPageHandler);

function onHomePageHandler() {
  refs.homePage.classList.remove('hideSearch');
  refs.blockBtn.classList.add('hideBtn');
  refs.header.style.backgroundImage = 'url(./images/img2.png)';
}

function onLibraryPageHandler() {
  refs.homePage.classList.add('hideSearch');
  refs.blockBtn.classList.remove('hideBtn');
  refs.header.style.backgroundImage = 'url(./images/bg2.png)';
}
