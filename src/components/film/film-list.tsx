import {FilmCard} from '@components/film/film-card.tsx';
import {Film} from '@mocks/films.ts';

export const FilmList = ({myFilms}: { myFilms: Film[] }) => (
  <div className="catalog__films-list">
    {myFilms.map((film) => (<FilmCard key={film.name}{...film}/>))}
  </div>
);
