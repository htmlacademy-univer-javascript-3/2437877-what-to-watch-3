import {FilmCard} from '@components/film/film-card.tsx';
import {Film} from 'models/film.ts';


export const FilmList = ({films}: { films: Film[] }) => (
  <div className="catalog__films-list">
    {films.map((film) => (<FilmCard key={film.name}{...film}/>))}
  </div>
);
