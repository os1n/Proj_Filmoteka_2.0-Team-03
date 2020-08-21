import renderGallery from './render-gallery';
import axios from 'axios';
import Pagination from 'tui-pagination';

const apiKey = 'fed6793f52ec0d228866e352cbff29a4';

export default {
  searchQuery: '',
  pageNuber: 1,
  paginationOption() {
    const obj = {
      usageStatistics: false,
      totalItems: 100,
      itemsPerPage: 18,
      visiblePages: 5,
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
      console.log('paginator:', evt);
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
    console.log('setPageNuber', this.pageNuber);
    this.pageNuber = number;
  },

  fetchMovies() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=${this.pageNuber}&include_adult=false`;

    return axios
      .get(url)
      .then(res => {
        console.log('paginator res :>> ', res);
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
