import {GenreItem} from '@components/genre-item.tsx';
import {genres, PromoFilm} from '@mocks/storeOfShit.ts';
import {Footer} from '@components/common/footer.tsx';
import {PromoHeader} from '@components/promo/promo-header.tsx';
import {useAppSelector} from '@store/hooks.ts';
import {PagedFilmList} from '@components/film/paged-film-list.tsx';

interface MainPageProps {
  promoFilm: PromoFilm;
}

export const MainPage = ({promoFilm}: MainPageProps) => {
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
          <PagedFilmList films={films}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};
