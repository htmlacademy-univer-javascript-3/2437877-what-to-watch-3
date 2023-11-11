import {FilmList} from '@components/film/film-list.tsx';
import {useState} from 'react';
import {Film} from '@mocks/films.ts';


export const PagedFilmList = ({films}: { films: Film[] }) => {
  const pageSize = 4;
  const [filmPage, setFilmPage] = useState(1);

  return (
    <>
      <div className="catalog__films-list">
        <FilmList films={films.slice(0, filmPage * pageSize)}/>
      </div>
      {films.length > filmPage * pageSize &&
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={() => setFilmPage(filmPage + 1)}>Show more</button>
            </div>}
    </>
  );
};
