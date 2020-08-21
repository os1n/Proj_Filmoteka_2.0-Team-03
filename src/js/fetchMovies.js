import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import galleryMarkup from '../templates/movie-gallery.hbs';
import movieDetailsMarkup from '../templates/movie-details.hbs';
import refs from '../js/refs';
import toastrNotify from './toastr';
import fetchGallery from './gallery.js';
import movieGalleryMarkup from './gallery-creation';
let searchQueryStatic = '';

function fetchMovies(searchQuery, fetchPage = 1) {
  searchQueryStatic = searchQuery;
  const key = 'fed6793f52ec0d228866e352cbff29a4';
  let url = ``;
  if (searchQuery === '') {
    console.log('Default query by popular');
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${fetchPage}`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=${fetchPage}&include_adult=false`;
  }
  axios
    .get(url)
    .then(res => {
      refs.movieGallery.innerHTML = '';
      //console.log(res);
      if (res.data.results.length === 0) {
        toastrNotify.toastrNoFind();
      } else if (res.data.results !== undefined) {
        const arrOfMoives = res.data.results;
        console.log(res);
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
          page: res.data.page,
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
        console.log(pagination);
        let pugBtns = document.querySelectorAll('.tui-page-btn');
        addEventsToBtns(pugBtns);
      }
    })
    .catch(err => console.error(err))
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}

function addEventsToBtns(arr) {
  arr.forEach(el =>
    el.addEventListener('click', event => {
      console.log(event);
      console.log(event.target.innerHTML);
      let nextPage = event.target.innerHTML;
      fetchMovies(searchQueryStatic, nextPage);
      // filmIdForDetails = event.target.id;
      // arrToHbs = identificationOfFilm(filmIdForDetails, filmsForDetailsSearch, arrToHbs);
      // injectFilmDetails(arrToHbs);
    }),
  );
}

export default fetchMovies;
