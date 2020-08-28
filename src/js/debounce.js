import _ from 'lodash';
import refs from './refs';
import toastrNotify from './toastr';
import fetchMovies from './fetchMovies';
import paginator from './paginator';

const debouncedSearch = _.debounce(e => {
  const inputValue = refs.searchInput.value;
  refs.spinner.classList.add('is-hidden');
  if (inputValue.length === 0) {
    refs.movieGallery.innerHTML = '';
    refs.pagination.innerHTML = '';
    toastrNotify.toastrNoInput();
  } else {
    paginator.resetPage();
    fetchMovies(inputValue);
  }
}, 800);
export default debouncedSearch;
