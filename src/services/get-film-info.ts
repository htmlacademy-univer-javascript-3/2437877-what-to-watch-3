import {films} from '@mocks/films.ts';

export const GetFilmInfoById = (filmId: string) => films.filter((x)=>x.id === parseInt(filmId, 10))[0];
