import genres from './jsons/genre.json';
const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';

export default {
  searchQuery: '',
  page: 1,

  errorCath(respons) {
    if (respons.ok) {
      return respons.json();
    } else {
      respons.json().then(result => console.log(result.status_message));
    }
  },

  defaultFetchMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    return fetch(url)
      .then(respons => this.errorCath(respons))
      .then(({ results }) => {
        this.incrementPage();
        return results;
      })
      .then(arr => this.getGenres(arr));
  },

  fetchMovies() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.query}&page=1&include_adult=false`;
    return fetch(url)
      .then(respons => this.errorCath(respons))
      .then(({ results }) => {
        this.incrementPage();
        return results;
      })
      .then(arr => this.getGenres(arr));
  },

  // fetchGenre() {
  //   const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
  //   return fetch(url).then(res => res.json());
  // },
  getGenres(arr) {
    const newArrOfMovies = [...arr];
    newArrOfMovies.forEach(element => {
      element.genres = [];
      element.genre_ids.forEach(genre_id => {
        genres.forEach(genre => {
          if (genre_id === genre.id) {
            element.genres.push(genre.name);
          }
        });
      });
    });
    return newArrOfMovies;
  },

  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  decrementPage() {
    if (this.page > 0) {
      this.page -= 1;
    }
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
