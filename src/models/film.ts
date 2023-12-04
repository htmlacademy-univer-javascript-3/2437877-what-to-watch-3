import {GenreType} from 'models/genre.ts';

export interface Film {
  id: string;
  name: string;
  genre: GenreType;
  previewImage: string;
  previewVideoLink: string;
}
