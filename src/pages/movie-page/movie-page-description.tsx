import {MoviePageBase} from './movie-page-base.tsx';
import {FilmDescription} from '@components/movie-page/film-description.tsx';
import {Action} from '@components/film/my-list.tsx';

export const MoviePageDescription = () => (
  <MoviePageBase content={<FilmDescription/>} activeTab='Overview' action={Action.Add}/>
);
