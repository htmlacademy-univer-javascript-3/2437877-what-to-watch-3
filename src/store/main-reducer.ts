import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '@store/const.ts';
import {GenreType} from '@models/genre.ts';
import {FilmInfo} from '@models/film-info.ts';
import {Film} from '@models/film.ts';
import {getFilmsAction, getMyFilmsAction, getPromoFilmAction} from '@services/api-methods.ts';
import {PromoFilm} from '@models/promo-film.ts';
import {FilmReview} from '@models/film-review.ts';

interface State {
  genre: GenreType;
  allFilms: Film[];
  currentFilms: Film[];
  promoFilm: PromoFilm|null;
  isFilmsLoaded: boolean;
  myFilms: Film[];
  filmInfo: FilmInfo|null;
  reviews: FilmReview[];
  similarFilms: Film[];
}

export const mainState: State = {
  genre: 'All genres',
  allFilms: [],
  currentFilms: [],
  promoFilm: null,
  isFilmsLoaded: false,
  myFilms: [],
  filmInfo: null,
  reviews: [],
  similarFilms: [],
};

export const mainSlice = createSlice({
  name: Namespace.Main,
  initialState: mainState,
  reducers: {
    setActiveGenre: (state, action: { payload:GenreType }) => {
      state.genre = action.payload;

      if (state.genre === 'All genres') {
        state.currentFilms = state.allFilms;
      } else {
        state.currentFilms = state.allFilms.filter((x) => x.genre === state.genre);
      }
    },
    setFilmInfo: (state, action: { payload:FilmInfo })=>{
      state.filmInfo = action.payload;
    },
    setSimilarFilms: (state, action: { payload:Film[] })=>{
      state.similarFilms = action.payload;
    },
  },
  extraReducers(builder){
    builder
      .addCase(getFilmsAction.rejected, (state,)=>{
        state.allFilms = [];
      })
      .addCase(getFilmsAction.fulfilled, (state, action)=>{
        state.allFilms = action.payload;
        state.isFilmsLoaded = true;
      })
      .addCase(getPromoFilmAction.rejected, (state,)=>{
        state.promoFilm = null;
      })
      .addCase(getPromoFilmAction.fulfilled, (state, action)=>{
        state.promoFilm = action.payload;
      })
      .addCase(getMyFilmsAction.rejected, (state,)=>{
        state.myFilms = [];
      })
      .addCase(getMyFilmsAction.fulfilled, (state, action)=>{
        state.myFilms = action.payload;
      });
  }
});
export const {setActiveGenre, setSimilarFilms,setFilmInfo} = mainSlice.actions;