import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '@store/const.ts';
import {mainSlice} from '@store/main-reducer.ts';
import {userSlice} from '@store/user-reducer.ts';


export const reducer = combineReducers({
  [Namespace.Main]: mainSlice.reducer,
  [Namespace.User]: userSlice.reducer,
});
