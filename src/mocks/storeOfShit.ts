import {GenreType} from '@models/genre.ts';

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

export const promoFilm: PromoFilm = {
  id: 1,
  filmName: 'Aviator',
  genre: 'Dramas',
  year: 2014,
  backgroundUrl: 'img/bg-the-grand-budapest-hotel.jpg',
  posterUrl: 'img/the-grand-budapest-hotel-poster.jpg'
};

export const filmUrl = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

export interface PromoFilm {
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
