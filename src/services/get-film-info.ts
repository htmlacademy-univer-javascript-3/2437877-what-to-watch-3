import {useAppSelector} from '@store/hooks.ts';
import {FilmInfo} from 'models/film-info.ts';

export const GetFilmInfoById = (filmId: string) : FilmInfo=> {
  const films = useAppSelector((x) => x);
  return films.filter((x)=>x.id === filmId)[0];
};
