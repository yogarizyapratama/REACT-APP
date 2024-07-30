import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

const initialState = {
  token: localStorage.getItem('token') || null,
  user: null,
  isTokenExpired: true,
  apiError: false,
  apiErrorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      localStorage.setItem('token', token);
      state.token = token;
      state.isTokenExpired = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setTokenExpired: (state) => {
      state.isTokenExpired = true;
    },
    setApiError: (state, action) => {
      state.apiError = true;
      state.apiErrorMessage = action.payload;
    },
    clearApiError: (state) => {
      state.apiError = false;
      state.apiErrorMessage = '';
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
      state.apiError = false;
      state.apiErrorMessage = '';
    },
  },
});

export const {
  setToken,
  setUser,
  setTokenExpired,
  setApiError,
  clearApiError,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
