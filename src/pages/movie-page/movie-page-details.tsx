import {MoviePageBase} from './movie-page-base.tsx';
import {FilmDetails} from '@components/movie-page/film-details.tsx';
import {Action} from '@components/film/my-list.tsx';

export const MoviePageDetails = () => (
  <MoviePageBase content={<FilmDetails/>} activeTab='Details' action={Action.Add}/>
);
