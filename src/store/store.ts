import {configureStore} from '@reduxjs/toolkit';
import {reducer} from '@store/reducer.ts';
import {createAPI} from '@services/api.ts';

const axios = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios
      }
    })
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
