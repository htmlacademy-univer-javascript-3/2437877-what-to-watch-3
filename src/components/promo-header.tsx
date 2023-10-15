import {PromoFilmCard} from './promo-film-card.tsx';
import {Header} from './header.tsx';

interface PromoHeaderProps{
  filmName: string;
  genre: string;
  year: number;
  backgroundUrl: string;
  posterUrl: string;
}
export const PromoHeader = ({backgroundUrl, filmName, posterUrl, genre, year}: PromoHeaderProps) => (
  <section className="film-card">
    <Header filmName={filmName} backgroundUrl={backgroundUrl}/>
    <div className="film-card__wrap">
      <PromoFilmCard filmName={filmName} imgUrl={posterUrl} genre={genre} year={year}/>
    </div>
  </section>
);
