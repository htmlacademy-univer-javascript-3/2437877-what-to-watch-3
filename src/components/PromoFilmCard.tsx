import {FilmInfo} from './FilmInfo.tsx';
import {FilmPoster} from '../Elements/FilmPoster.tsx';

interface FilmCardProps {
  filmName: string;
  imgUrl: string;
  genre: string;
  year: number;
}

export const PromoFilmCard = ({filmName, genre, imgUrl, year}: FilmCardProps) => (
  <div className="film-card__info">
    <FilmPoster filmName={filmName} imgUrl={imgUrl}/>
    <div className="film-card__desc">
      <FilmInfo filmName={filmName} genre={genre} year={year}/>
      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button">
          <svg viewBox="0 0 19 19" width={19} height={19}>
            <use xlinkHref="#play-s"/>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list film-card__button" type="button">
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add"/>
          </svg>
          <span>My list</span>
          <span className="film-card__count">9</span>
        </button>
      </div>
    </div>
  </div>
);
