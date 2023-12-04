import {FilmReview} from '@components/movie-page/film-review.tsx';

export const FilmReviews = () => {
  const reviews = ;

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => <FilmReview key={review.id} filmReview={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2).map((review) => <FilmReview key={review.id} filmReview={review}/>)}
      </div>
    </div>
  );
}
