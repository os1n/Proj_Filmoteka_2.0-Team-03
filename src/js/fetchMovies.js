import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import galleryMarkup from '../templates/movie-gallery.hbs';
import refs from '../js/refs';
import toastrNotify from './toastr';
import fetchGallery from './gallery.js';
import movieGalleryMarkup from './gallery-creation';

// function movieGalleryMarkup(data) {
//   const markupGallery = galleryMarkup(data);
//   refs.movieGallery.insertAdjacentHTML('beforeend', markupGallery);
// }

function fetchMovies(searchQuery) {
  const key = 'fed6793f52ec0d228866e352cbff29a4';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  axios
    .get(url)
    .then(res => {
      refs.movieGallery.innerHTML = '';
      //console.log(res);
      if (res.data.results.length === 0) {
        toastrNotify.toastrNoFind();
      } else if (res.data.results !== undefined) {
        const arrOfMoives = res.data.results;
        //console.log(arrOfMoives);
        const newArrOfMovies = fetchGallery.getGenres(arrOfMoives);
        movieGalleryMarkup(newArrOfMovies);
        refs.spinner.classList.remove('is-hidden');

        // var pagination1 = new Pagination('pagination1', {
        //   totalItems: 100,
        //   itemsPerPage: 9,
        //   visiblePages: 5,
        // });

        const pagination = new Pagination('pagination', {
          usageStatistics: false,
          totalItems: res.data.total_results,
          itemsPerPage: 20,
          visiblePages: 5,
          page: 1,
          centerAlign: false,
          firstItemClassName: 'tui-first-child',
          lastItemClassName: 'tui-last-child',
          template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton:
              '<a href="#" class="tui-page-btn tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + '</a>',
            disabledMoveButton:
              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
              '<span class="tui-ico-{{type}}">{{type}}</span>' +
              '</span>',
            moreButton:
              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' + '<span class="tui-ico-ellip">...</span>' + '</a>',
          },
        });
      }
    })
    .catch(err => console.error(err))
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
export default fetchMovies;
