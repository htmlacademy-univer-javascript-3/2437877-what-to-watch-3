import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '@store/const.ts';
import {AuthStatus} from '@models/auth-status.ts';
import {checkAuthStatusAction, loginAction, logoutAction} from '@services/api-methods.ts';
import {UserInfo} from '@models/user-Info.ts';
import {deleteToken, setToken} from '@services/auth-token.ts';

interface UserState {
  authorizationStatus: AuthStatus;
  userInfo: UserInfo|null;
}

export const initialState: UserState = {
  authorizationStatus: AuthStatus.Unauthorized,
  userInfo: null,
};

export const userSlice = createSlice({
  name: Namespace.User,
  initialState: initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(loginAction.rejected, (state,)=>{
        state.authorizationStatus = AuthStatus.Unauthorized;
        state.userInfo = null;
        deleteToken();
      })
      .addCase(loginAction.fulfilled, (state, action)=>{
        state.authorizationStatus = AuthStatus.Authorized;
        state.userInfo = action.payload;
        setToken(action.payload.token);
      })
      .addCase(checkAuthStatusAction.rejected, (state,)=>{
        state.authorizationStatus = AuthStatus.Unauthorized;
        state.userInfo = null;
      })
      .addCase(checkAuthStatusAction.fulfilled, (state, action)=>{
        state.authorizationStatus = AuthStatus.Authorized;
        state.userInfo = action.payload;
      })
      .addCase(logoutAction.rejected, (state,)=>{
        state.authorizationStatus = AuthStatus.Unauthorized;
        state.userInfo = null;
      })
      .addCase(logoutAction.fulfilled, (state)=>{
        state.authorizationStatus = AuthStatus.Unauthorized;
        state.userInfo = null;
      });
  }
});
