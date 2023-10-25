import {PromoFilmCard} from './promo-film-card.tsx';
import {BaseHeader} from '../common/base-header.tsx';
import {PromoFilm} from 'mocks/storeOfShit.ts';

interface PromoHeaderProps{
  promoFilm: PromoFilm;
}
export const PromoHeader = ({promoFilm}: PromoHeaderProps) => (
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
