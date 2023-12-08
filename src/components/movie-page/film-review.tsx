import {FilmReviewDto} from '@models/Dto/film-review-dto.ts';

export const FilmReview = ({filmReview}: { filmReview: FilmReviewDto }) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">
        {filmReview.comment}
      </p>
      <footer className="review__details">
        <cite className="review__author">{filmReview.user}</cite>
        <time className="review__date" dateTime={filmReview.date}>
          {filmReview.date}
        </time>
      </footer>
    </blockquote>
    <div className="review__rating">{filmReview.rating}</div>
  </div>
);
