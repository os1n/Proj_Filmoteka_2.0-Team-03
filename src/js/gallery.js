import renderGallery from './render-gallery';
import paginator from './paginator';
import genres from './jsons/genre.json';

export default {
  errorCath(respons) {
    // console.log('ErrorCatch gallery' ,respons);
    if (respons.status === 200) {
      return respons;
    } else {
      console.log(result.statusText);
    }
  },

  defaultFetchMovies() {
    paginator.resetPage(); // очистит страницу пагинатора при нажатии Home
    paginator.setDefaultSearchUrl();
    return paginator
      .fetchMovies()
      .then(respons => this.errorCath(respons))
      .then(respons => {
        // renderGallery(respons.data.results);
        paginator.paginationStartListen();
        return respons.data.results;
      })
      .then(arr => this.getGenres(arr));
  },

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
      // console.log('L=', element.genres.length);
      if (element.genres.length > 3) {
        element.genres[2] = 'other';
        element.genres.length = 3;
      }
    });
    return newArrOfMovies;
  },
};
