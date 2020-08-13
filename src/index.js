import './styles.css';
import refs from './js/refs';
import debouncedSearch from './js/debounce';

refs.spinner.classList.add('is-hidden');

refs.searchInput.addEventListener('input', event => {
  refs.spinner.classList.remove('is-hidden');
  debouncedSearch();
});
