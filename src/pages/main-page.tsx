import {GenreItem} from '@components/genre-item.tsx';
import {genres, PromoFilm} from '@mocks/storeOfShit.ts';
import {FilmList} from '@components/film/film-list.tsx';
import {Film} from '@mocks/films.ts';
import {Footer} from '@components/common/footer.tsx';
import {PromoHeader} from '@components/promo/promo-header.tsx';
import {useState} from 'react';

interface MainPageProps {
  activeGenre: string;
  films: Film[];
  promoFilm: PromoFilm;
}

export const MainPage = ({activeGenre, films, promoFilm}: MainPageProps) => {
  const pageSize = 4;
  const [filmPage, setFilmPage] = useState(1);
  return (
    <>
      <PromoHeader promoFilm={promoFilm}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {genres.map((genre) => <GenreItem key={genre} genre={genre} isActive={activeGenre === genre}/>)}
          </ul>
          <div className="catalog__films-list">
            <FilmList myFilms={films.slice(0, filmPage * pageSize)}/>
          </div>
          {films.length > filmPage * pageSize && <div className="catalog__more"><button className="catalog__button" type="button" onClick={() => setFilmPage(filmPage + 1)}>Show more</button></div>}
        </section>
        <Footer/>
      </div>
    </>
  );
};
