import {createAction} from '@reduxjs/toolkit';
import {GenreType} from '@models/genre.ts';
import {Film} from '@models/film.ts';
import {FilmInfo} from 'models/film-info.ts';

export const Action = {
  SET_ACTIVE_GENRE: 'SET_ACTIVE_GENRE',
  SET_FILMS_LIST: 'SET_FILMS_LIST',
  SET_FILMS_LOADED: 'SET_FILMS_LOADED',
  SET_PROMO_FILM: 'SET_PROMO_FILM',
  SET_MYFILMS_LIST: 'SET_MYFILMS_LIST',
};

export const setActiveGenre = createAction<GenreType>(Action.SET_ACTIVE_GENRE);
export const setAllFilms = createAction<Film[]>(Action.SET_FILMS_LIST);
export const setFilmsLoaded = createAction(Action.SET_FILMS_LOADED);
export const setPromoFilm = createAction<FilmInfo>(Action.SET_PROMO_FILM);
export const setMyFilms = createAction<Film[]>(Action.SET_MYFILMS_LIST);
