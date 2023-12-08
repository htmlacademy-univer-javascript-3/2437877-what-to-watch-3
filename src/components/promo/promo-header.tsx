import {PromoFilmCard} from './promo-film-card.tsx';
import {BaseHeader} from '../common/base-header.tsx';
import {PromoFilm} from '@models/promo-film.ts';

interface PromoHeaderProps{
  promoFilm: PromoFilm|null;
}
export const PromoHeader = ({promoFilm}: PromoHeaderProps) => {
  if(promoFilm === null){
    return (<BaseHeader/>);
  }
  return(
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
      </div>
      <BaseHeader/>
      <div className="film-card__wrap">
        <PromoFilmCard promoFilm={promoFilm} />
      </div>
    </section>
  );
};
