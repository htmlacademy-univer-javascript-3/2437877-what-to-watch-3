import {MoviePageBase} from './movie-page-base.tsx';
import {Action} from '@components/film/my-list.tsx';
import {FilmReviews} from '@components/movie-page/film-reviews.tsx';

export const MoviePageInList = () => (
  <MoviePageBase content={<FilmReviews/>} activeTab='Reviews' action={Action.InList}/>
);
