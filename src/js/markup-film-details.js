import filmDetailsCardMarkup from '../templates/movie-details.hbs';

export default function markupFilmDetails(obj) {
  const filmDetails = filmDetailsCardMarkup(obj);
  return filmDetails;
}


