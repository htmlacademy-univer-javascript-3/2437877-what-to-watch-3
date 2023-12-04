import {GenreType} from 'models/genre.ts';

export const genres: GenreType[] = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export interface FilmInfo {
  id: number;
  filmName: string;
  genre: GenreType;
  year: number;
  backgroundUrl: string;
  posterUrl: string;
}

export enum AuthStatus {
  Authorize,
  UnAuthorize,
}
