import {FilmList} from '@components/film/film-list.tsx';
import {Film} from '@mocks/films.ts';
import {BaseHeader} from '@components/common/base-header.tsx';

export const MyList = ({myFilms}: { myFilms: Film[] }) => (
  <div className="user-page">
    <BaseHeader isUserPage>
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myFilms.length}</span></h1>
    </BaseHeader>
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmList films={myFilms}/>
    </section>
  </div>
);
