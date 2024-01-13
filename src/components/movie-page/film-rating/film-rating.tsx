export interface FilmRating
{
  ratingScore: number;
  ratingCount: number;
}


export const FilmRating = ({ratingScore, ratingCount}:FilmRating) => {
  const getTextMarkByScore = (rating: number): string => {
    if (rating < 3) {
      return 'Bad';
    } else if (rating < 5) {
      return 'Normal';
    } else if (rating < 8) {
      return 'Good';
    } else if (rating < 10) {
      return 'Very good';
    } else if (rating === 10) {
      return 'Awesome';
    }
    return 'Impossible!!!!!!!';
  };

  return(
    <div className="film-rating">
      <div className="film-rating__score">{ratingScore}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getTextMarkByScore(ratingScore)}</span>
        <span className="film-rating__count">{ratingCount} ratings</span>
      </p>
    </div>
  );
};
