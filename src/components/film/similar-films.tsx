import {FilmList} from '@components/film/film-list.tsx';
import {films} from '@mocks/films.ts';

interface SimilarFilmsProps {
  filmGenre: string;
  excludeFilmId: number;
}

export const SimilarFilms = ({filmGenre, excludeFilmId}: SimilarFilmsProps) => (
  <FilmList films={films.filter((x) => x.genre === filmGenre && x.id !== excludeFilmId)}/>
);
