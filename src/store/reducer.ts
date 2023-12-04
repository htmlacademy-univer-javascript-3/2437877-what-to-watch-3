import {GenreType} from '@models/genre.ts';
import {Film} from '@models/film.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenre, setAllFilms, setFilmsLoaded, setMyFilms, setPromoFilm} from '@store/action.ts';
import {FilmInfo} from 'models/film-info.ts';

const initialState: State = {
  genre: 'Crime',
  allFilms: [],
  currentFilms: [],
  promoFilm: null,
  isFilmsLoaded: false,
  myFilms: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.genre = action.payload;

      if (state.genre === 'All genres') {
        state.currentFilms = state.allFilms;
      } else {
        state.currentFilms = state.allFilms.filter((x) => x.genre === state.genre);
      }
    })
    .addCase(setAllFilms, (state, action)=>{
      state.allFilms = action.payload;
    })
    .addCase(setFilmsLoaded,(state,)=>{
      state.isFilmsLoaded = true;
    })
    .addCase(setPromoFilm, (state, action)=>{
      state.promoFilm = action.payload;
    })
    .addCase(setMyFilms, (state, action)=>{
      state.myFilms = action.payload;
    });

});


interface State {
  genre: GenreType;
  allFilms: Film[];
  currentFilms: Film[];
  promoFilm: FilmInfo|null;
  isFilmsLoaded: boolean;
  myFilms: Film[];
}
