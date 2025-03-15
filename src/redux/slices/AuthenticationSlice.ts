import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IUserProps } from '@/types/global';

import logoutUser from '../actions/logoutUser';
import type { RootState } from '../store';

type AuthenticationState = {
  user: IUserProps;
};

const initialState: AuthenticationState = {
  user: {} as AuthenticationState['user'],
};

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUserProps>) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutUser, () => initialState);
    // end
  },
});

const selectAuthenticationState = (state: RootState) => state.authentication;

export const userSelector = createSelector([selectAuthenticationState], (auth) => auth.user);

export const { setUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
