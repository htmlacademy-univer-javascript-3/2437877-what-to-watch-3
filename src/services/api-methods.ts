import {Film} from '@models/film.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '@store/store.ts';
import {AxiosInstance} from 'axios';
import {setAllFilms, setFilmsLoaded} from '@store/action.ts';
import {PromoFilm} from 'models/promo-film.ts';


export const getFilmsAction = createAsyncThunk<Film[],undefined,ThunkConfig>(
  'data/getFilms',
  async (_,{ dispatch,extra: axios}) => {
    const { data } = await axios.get<Film[]>('films');
    dispatch(setAllFilms(data));
    dispatch(setFilmsLoaded);
    return data;
  },
);

export const getPromoFilmAction = createAsyncThunk<PromoFilm, undefined, ThunkConfig>(
  'data/getPromoFilm',
  async (_arg,{ extra: api}) => {
    const { data } = await api.get<PromoFilm>('promo');
    return data;
  },
);

export const getFilmAction = createAsyncThunk<Film, string, ThunkConfig>(
  'data/getFilm',
  async (id,{ extra: api}) => {
    const { data } = await api.get<Film>(`films/${id}`);
    return data;
  },
);

export const getSimilarFilmsAction = createAsyncThunk<Film[], string, ThunkConfig>(
  'data/getSimilarFilms',
  async (id,{ extra: api}) => {
    const { data } = await api.get<Film[]>(`films/${id}/similar`);
    return data;
  },
);


interface ThunkConfig {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
