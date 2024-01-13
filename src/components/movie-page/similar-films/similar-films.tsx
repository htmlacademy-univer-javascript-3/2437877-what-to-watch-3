import {useEffect, useState} from 'react';
import {PagedFilmList} from '@components/film-list/paged-film-list/paged-film-list.tsx';
import {Film} from '@models/film.ts';
import {getSimilarFilms} from '@services/api-methods.ts';

interface SimilarFilmsProps {
  filmGenre: string;
  excludeFilmId: string;
}

export const SimilarFilms = ({filmGenre, excludeFilmId}: SimilarFilmsProps) => {
  const [films, setFilms] = useState<Film[]>([]);
  useEffect(()=>{
    getSimilarFilms(excludeFilmId).then((x)=> setFilms(x));
  },[filmGenre, excludeFilmId]);

  return (
    <PagedFilmList films={films.filter((x) => x.genre === filmGenre && x.id !== excludeFilmId)}/>
  );
};
