import {FilmList} from '@components/film/film-list.tsx';
import {BaseHeader} from '@components/common/base-header.tsx';
import {useAppSelector} from '@store/hooks.ts';

export const MyList = () => {
  const myFilms = useAppSelector((x) => x.MAIN.myFilms);
  return(
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
};
