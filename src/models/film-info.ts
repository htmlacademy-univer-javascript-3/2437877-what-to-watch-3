import {GenreType} from 'models/genre.ts';

export interface FilmInfo {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: GenreType;
  released: number;
  isFavorite: boolean;
}
