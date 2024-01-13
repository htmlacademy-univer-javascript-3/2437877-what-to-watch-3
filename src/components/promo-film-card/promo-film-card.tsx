import {FilmInfo} from '@components/film-info/film-info.tsx';
import {FilmPoster} from '../film-poster/film-poster.tsx';
import {GetFilmPlayerPageAddress} from '@services/get-filmpage-address.ts';
import {Play} from '@components/play/play.tsx';
import {MyList} from '@components/my-list/my-list.tsx';
import {PromoFilm} from '@models/promo-film.ts';

interface PromoFilmCardProps {
  promoFilm: PromoFilm;
}

export const PromoFilmCard = ({promoFilm}: PromoFilmCardProps) => (
  <div className="film-card__info">
    <FilmPoster filmName={promoFilm.name} imgUrl={promoFilm.posterImage}/>
    <div className="film-card__desc">
      <FilmInfo filmName={promoFilm.name} genre={promoFilm.genre} year={promoFilm.released}/>
      <div className="film-card__buttons">
        <Play filmUrl={GetFilmPlayerPageAddress(promoFilm.id)}/>
        <MyList isFavorite={false}/>
      </div>
    </div>
  </div>
);
