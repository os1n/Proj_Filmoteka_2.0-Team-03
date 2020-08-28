import paginator from './paginator';
import 'tui-pagination/dist/tui-pagination.css';
import refs from '../js/refs';
import toastrNotify from './toastr';
import renderGallery from './render-gallery';
function fetchMovies(searchQuery) {
  paginator.setQuery(searchQuery);
  paginator.setSearchUrl();
  paginator
    .fetchMovies()
    .then(res => {
      refs.movieGallery.innerHTML = '';
      paginator.resetPage();

      if (res.data.results.length === 0) {
        toastrNotify.toastrNoFind();
        return;
      } else if (res.data.results !== undefined) {
        paginator.paginationStartListen();
        // console.log(res.data);
        renderGallery(res.data.results);
        refs.spinner.classList.remove('is-hidden');
        return res;
      }
    })
    .catch(err => console.error(err))
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
export default fetchMovies;
