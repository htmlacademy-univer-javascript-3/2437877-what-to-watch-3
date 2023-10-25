import {MoviePageBase} from './movie-page-base.tsx';
import {FilmDetails} from '@components/movie-page/film-details.tsx';

export const MoviePageDetails = () => (
  <MoviePageBase content={<FilmDetails/>}/>
);
