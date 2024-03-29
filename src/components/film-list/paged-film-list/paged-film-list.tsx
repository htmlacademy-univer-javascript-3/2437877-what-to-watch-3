import {useState} from 'react';
import {FilmList} from '@components/film-list/film-list.tsx';
import {Film} from '@models/film.ts';


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
