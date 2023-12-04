import {MoviePageBase} from './movie-page-base.tsx';
import {FilmReviews} from '@components/movie-page/film-reviews.tsx';
import {filmReviews} from 'models/film-review.ts';

export const MoviePageReviews = () => (
  <MoviePageBase>
    <FilmReviews reviews={filmReviews}/>
  </MoviePageBase>
);
