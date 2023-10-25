import {FilmInfo} from '../film/film-info.tsx';
import {FilmPoster} from '../film/film-poster.tsx';
import {PromoFilm} from '@mocks/storeOfShit.ts';
import {GetFilmPageAddress} from '@services/get-filmpage-address.ts';
import {Play} from '@components/film/play.tsx';
import {MyList} from '@components/film/my-list.tsx';

interface PromoFilmCardProps {
  promoFilm: PromoFilm;
}

export const PromoFilmCard = ({promoFilm}: PromoFilmCardProps) => (
  <div className="film-card__info">
    <FilmPoster filmName={promoFilm.filmName} imgUrl={promoFilm.posterUrl}/>
    <div className="film-card__desc">
      <FilmInfo filmName={promoFilm.filmName} genre={promoFilm.genre} year={promoFilm.year}/>
      <div className="film-card__buttons">
        <Play filmUrl={GetFilmPageAddress(promoFilm.id)}/>
        <MyList isFavorite={false}/>
      </div>
    </div>
  </div>
);
