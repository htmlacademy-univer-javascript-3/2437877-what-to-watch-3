import {FilmCard} from '../components/FilmCard.tsx';
import {GenreItem} from '../components/GenreItem.tsx';
import {PromoHeader} from '../components/PromoHeader.tsx';
import {promoFilm} from '../storeOfShit.ts';
import {Footer} from '../components/Footer.tsx';

interface AppProps{
  genres: string[];
  activeGenre: string;
  films: {name: string; pageUrl: string; imgUrl:string}[];
}
export function App({activeGenre, films, genres}: AppProps) {
  return (
    <>
      <PromoHeader filmName={promoFilm.filmName} genre={promoFilm.genre} year={promoFilm.year} backgroundUrl={promoFilm.backgroundUrl} posterUrl={promoFilm.posterUrl}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {genres.map((genre) => <GenreItem key={genre} genre={genre} isActive={activeGenre === genre} />)}
          </ul>
          <div className="catalog__films-list">
            {films.map((film) => <FilmCard key={film.name} name={film.name} pageUrl={film.pageUrl} imgUrl={film.imgUrl}/>)}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}
