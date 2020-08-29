import './styles.css';
import './normalize.css';
import './js/gallery-creation.js';
import refs from './js/refs';
import debouncedSearch from './js/debounce';
import { defaultGalleryCreation } from './js/gallery-creation.js';
import './js/myLibrary';
import './js/navigation';
import './js/detailedCardSavingMovies';

refs.spinner.classList.add('is-hidden');

refs.searchInput.addEventListener('input', event => {
  refs.spinner.classList.remove('is-hidden');
  debouncedSearch();
});
refs.searchInput.addEventListener('keypress', event => {
  if (event.key === 'Enter' && event.target.value != '') {
    refs.spinner.classList.remove('is-hidden');
    debouncedSearch();
  }
});

defaultGalleryCreation();
