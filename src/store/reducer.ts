import {GenreType} from '@models/genre.ts';
import {Film, films} from '@mocks/films.ts';
import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenre} from '@store/action.ts';

interface State {
  genre: GenreType;
  films: Film[];
}

const initialState: State = {
  genre: 'Crime',
  films: films,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.genre = action.payload;

      if (state.genre === 'All genres') {
        state.films = films;
      } else {
        state.films = films.filter((x) => x.genre === state.genre);
      }
    });

});
