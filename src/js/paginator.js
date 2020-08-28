import renderGallery from './render-gallery';
import axios from 'axios';
import Pagination from 'tui-pagination';
import toastrNotify from './toastr';

const apiKey = 'fed6793f52ec0d228866e352cbff29a4';

export default {
  searchQuery: '',
  pageNuber: 1,
  totalResults: 0,
  fetchUrl: '',
  paginationOption() {
    const obj = {
      usageStatistics: false,
      totalItems: this.totalResults,
      itemsPerPage: 1,
      visiblePages: 6,
      page: this.pageNuber,
      centerAlign: false,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton: '<a href="#" class="tui-page-btn tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' + '<span class="tui-ico-ellip">...</span>' + '</a>',
      },
    };
    return obj;
  },

  paginationSet() {
    return new Pagination('pagination', this.paginationOption());
  },

  paginationStartListen() {
    this.paginationSet().on('afterMove', evt => {
      // console.log('paginator:', evt);
      this.setPageNuber(evt.page);
      this.fetchMovies().then(res => {
        renderGallery(res.data.results);
        window.scrollTo({
          top: 250,
          left: 0,
          behavior: 'smooth',
        });
      });
    });
  },

  setPageNuber(number) {
    this.pageNuber = number;
  },

  setSearchUrl() {
    this.fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=${this.pageNuber}&include_adult=false`;
  },

  fetchMovies() {
    // this.fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=${this.pageNuber}&include_adult=false`;
    this.fetchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.pageNuber}`;
    return axios
      .get(this.fetchUrl)
      .then(res => {
        // console.log('paginator res :>> ', res);
        if (res.data.page === 1) {
          toastrNotify.toastrFinded(res.data.total_results, res.data.total_pages);
        }
        this.totalResults = res.data.total_pages;
        return res;
      })
      .catch(err => console.error(err));
  },

  setQuery(query) {
    this.searchQuery = query;
  },

  resetPage() {
    this.pageNuber = 1;
  },
};
