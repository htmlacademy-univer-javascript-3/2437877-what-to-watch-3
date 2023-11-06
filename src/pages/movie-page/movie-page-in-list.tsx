import {MoviePageBase} from './movie-page-base.tsx';
import {FilmReviews} from '@components/movie-page/film-reviews.tsx';
import {filmReviews} from '@mocks/reviews.ts';

export const MoviePageInList = () => (
  <MoviePageBase>
    <FilmReviews reviews={filmReviews}/>
  </MoviePageBase>
);
