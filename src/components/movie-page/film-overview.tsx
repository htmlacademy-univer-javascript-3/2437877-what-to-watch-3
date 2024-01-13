import {FilmRating} from '@components/movie-page/film-rating/film-rating.tsx';
import {FilmInfo} from '@models/film-info.ts';

export const FilmOverview = ({filmInfo}:{filmInfo: FilmInfo}) => (
  <>
    <FilmRating ratingCount={filmInfo.scoresCount} ratingScore={filmInfo.rating}/>
    <div className="film-card__text">
      <p>{filmInfo.description}</p>
      <p className="film-card__director">
        <strong>Director: {filmInfo.director}</strong>
      </p>
      <p className="film-card__starring">
        <strong>
        Starring: {filmInfo.starring.slice(0,4).join(', ')}
        </strong>
      </p>
    </div>
  </>
);
