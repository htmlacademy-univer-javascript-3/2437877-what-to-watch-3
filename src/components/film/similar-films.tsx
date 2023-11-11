import {films} from '@mocks/films.ts';
import {PagedFilmList} from '@components/film/paged-film-list.tsx';

interface SimilarFilmsProps {
  filmGenre: string;
  excludeFilmId: number;
}

export const SimilarFilms = ({filmGenre, excludeFilmId}: SimilarFilmsProps) => (
  <PagedFilmList films={films.filter((x) => x.genre === filmGenre && x.id !== excludeFilmId)}/>
);
