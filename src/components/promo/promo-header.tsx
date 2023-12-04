import {PromoFilmCard} from './promo-film-card.tsx';
import {BaseHeader} from '../common/base-header.tsx';
import {FilmInfo} from 'models/film-info.ts';

interface PromoHeaderProps{
  promoFilm: FilmInfo|null;
}
export const PromoHeader = ({promoFilm}: PromoHeaderProps) => {
  if(promoFilm === null){
    return (<BaseHeader/>);
  }
  return(
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundUrl} alt={promoFilm.filmName}/>
      </div>
      <BaseHeader/>
      <div className="film-card__wrap">
        <PromoFilmCard promoFilm={promoFilm} />
      </div>
    </section>
  );
};
