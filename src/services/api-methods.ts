import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '@models/film.ts';
import {AppDispatch, RootState} from '@store/store.ts';
import {PromoFilm} from '@models/promo-film.ts';
import {FilmInfo} from '@models/film-info.ts';
import {createAPI} from '@services/api.ts';


interface ThunkConfig {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export const getFilmsAction = createAsyncThunk<Film[],undefined,ThunkConfig>(
  'data/getFilms',
  async (_arg,{ extra: axios}) => {
    const { data } = await axios.get<Film[]>('films');
    return data;
  },
);

export const getMyFilmsAction = createAsyncThunk<Film[],undefined,ThunkConfig>(
  'data/getMyFilms',
  async (_,{ extra: axios}) => {
    const { data } = await axios.get<Film[]>('favorite');
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

export const getFilmAction = createAsyncThunk<FilmInfo, string, ThunkConfig>(
  'data/getFilm',
  async (id,{ extra: api}) => {
    const { data } = await api.get<FilmInfo>(`films/${id}`);
    return data;
  },
);

export const getFilmInfo = async (filmId: string) => {
  const api = createAPI();
  const {data} = await api.get<FilmInfo>(`films/${filmId}`);
  return data;
};

export const getSimilarFilms = async (filmId: string) => {
  const api = createAPI();
  const {data} = await api.get<Film[]>(`films/${filmId}/similar`);
  return data;
};


