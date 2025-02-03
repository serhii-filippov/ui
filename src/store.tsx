import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './features/listingsSlice';
import filtersReducer from './features/filtersSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;