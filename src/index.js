import './styles.css';
import './normalize.css';
import './js/gallery-creation.js';
import refs from './js/refs';
import debouncedSearch from './js/debounce';
import filmListStorage from './js/filmListStorage';



refs.spinner.classList.add('is-hidden');

refs.searchInput.addEventListener('input', event => {
  refs.spinner.classList.remove('is-hidden');
  debouncedSearch();
});

