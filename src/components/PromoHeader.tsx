import {PromoFilmCard} from './PromoFilmCard.tsx';
import {Header} from './Header.tsx';

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
