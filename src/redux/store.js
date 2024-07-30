import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import loadingReducer from './slices/loading'

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading : loadingReducer
  },
});

export default store;
