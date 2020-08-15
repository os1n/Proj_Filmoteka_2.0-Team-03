const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';
export default {
  searchQuery: 'a',
  page: 1,
  defaultFetchMovies() {
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=''&page=1`;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    return fetch(url)
      .then(res => res.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
  },
  fetchMovies() {
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=''&page=1`;
    //const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=${this.page}&include_adult=false&query=${this.query}`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=1&include_adult=false`;
    return fetch(url)
      .then(res => res.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
  },

  fetchGenre() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    return fetch(url).then(res => res.json());
  },

  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
