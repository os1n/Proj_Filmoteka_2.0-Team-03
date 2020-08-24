import renderGallery from './render-gallery';
import genres from './jsons/genre.json';
const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';

export default {
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
      .then(respons => {
        renderGallery(respons.results);
        return respons.results;
      });
    // .then(arr => this.getGenres(arr));
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
    });
    return newArrOfMovies;
  },
};
