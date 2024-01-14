import {GenreItem} from '@components/genre-item.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {PromoHeader} from '@components/header/promo-header/promo-header.tsx';
import {useAppSelector} from '@store/hooks.ts';
import {PagedFilmList} from '@components/film-list/paged-film-list/paged-film-list.tsx';

export const MainPage = () => {
  const films = useAppSelector((x) => x.MAIN.allFilms);
  const promoFilm = useAppSelector((x)=>x.MAIN.promoFilm);
  const currentGenre = useAppSelector((x)=>x.MAIN.genre);

  const filmsToShow = currentGenre === 'All genres' ? films : films.filter((x)=>x.genre === currentGenre);

  return (
    <>
      <PromoHeader promoFilm={promoFilm}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {['All genres', ...new Set(films.map((x)=>x.genre))].slice(0,11).map((genre) => <GenreItem key={genre} genre={genre}/>)}
          </ul>
          <PagedFilmList films={filmsToShow}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};
