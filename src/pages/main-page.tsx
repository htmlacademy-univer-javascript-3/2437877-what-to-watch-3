import {GenreItem} from '@components/genre-item.tsx';
import {genres, PromoFilm} from '@mocks/storeOfShit.ts';
import {FilmList} from '@components/film/film-list.tsx';
import {Footer} from '@components/common/footer.tsx';
import {PromoHeader} from '@components/promo/promo-header.tsx';
import {useState} from 'react';
import {useAppSelector} from '@store/hooks.ts';

interface MainPageProps {
  promoFilm: PromoFilm;
}

export const MainPage = ({promoFilm}: MainPageProps) => {
  const pageSize = 4;
  const [filmPage, setFilmPage] = useState(1);
  const films = useAppSelector((x) => x.films);

  return (
    <>
      <PromoHeader promoFilm={promoFilm}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {genres.map((genre) => <GenreItem key={genre} genre={genre}/>)}
          </ul>
          <div className="catalog__films-list">
            <FilmList films={films.slice(0, filmPage * pageSize)}/>
          </div>
          {films.length > filmPage * pageSize &&
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={() => setFilmPage(filmPage + 1)}>Show more</button>
            </div>}
        </section>
        <Footer/>
      </div>
    </>
  );
};
