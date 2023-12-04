import {FilmReview} from 'models/film-review.ts';
interface FilmReviewProps {
  filmReview: FilmReview;
}
export const FilmReview = ({filmReview}:FilmReviewProps) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">
        {filmReview.text}
      </p>
      <footer className="review__details">
        <cite className="review__author">{filmReview.author}</cite>
        <time className="review__date" dateTime={filmReview.date}>
          {filmReview.date}
        </time>
      </footer>
    </blockquote>
    <div className="review__rating">{filmReview.rating}</div>
  </div>
);
