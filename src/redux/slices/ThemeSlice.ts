import { createSlice, createSelector } from '@reduxjs/toolkit';

import { EThemeProps } from '@/types/global';

import type { RootState } from '../store';

type ThemeState = {
  theme: EThemeProps;
};

const initialState: ThemeState = {
  theme: EThemeProps.light,
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === EThemeProps.light ? EThemeProps.dark : EThemeProps.light;
    },
  },
});

const selectThemeState = (state: RootState) => state.theme;

export const themeSelector = createSelector([selectThemeState], (themeState) => themeState.theme);

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
