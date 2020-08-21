import _ from 'lodash';
import refs from './refs';
import toastrNotify from './toastr';
import fetchMovies from './fetchMovies';

const debouncedSearch = _.debounce(e => {
  const inputValue = refs.searchInput.value;
  refs.spinner.classList.add('is-hidden');
  if (inputValue.length === 0) {
    refs.movieGallery.innerHTML = '';
    refs.pagination.innerHTML = '';
    toastrNotify.toastrNoInput();
  }
  fetchMovies(inputValue, 1);
}, 800);
export default debouncedSearch;
