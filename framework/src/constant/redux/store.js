import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import coinSlice from './Coin/coinSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    coins: coinSlice,
  },
  devTools: true, // for redux devtools to be change to false before deployment
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
