import {createAction} from '@reduxjs/toolkit';
import {GenreType} from '@models/genre.ts';

export const Action = {
  SET_ACTIVE_GENRE: 'SET_ACTIVE_GENRE',
};

export const setActiveGenre = createAction<GenreType>(Action.SET_ACTIVE_GENRE);
