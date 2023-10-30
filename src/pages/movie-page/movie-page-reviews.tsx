import {MoviePageBase} from './movie-page-base.tsx';
import {FilmDescription} from '@components/movie-page/film-description.tsx';

export const MoviePageDescription = () => (
  <MoviePageBase content={<FilmDescription/>}/>
);
