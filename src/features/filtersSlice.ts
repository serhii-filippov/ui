import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from '../types/types';

const initialState: FiltersState = {
  sortBy: 'newest',
  statusFilter: 'all',
  searchQuery: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<'newest' | 'oldest'>) => {
      state.sortBy = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<'all' | 'active' | 'sold' | 'other'>) => {
      state.statusFilter = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSortBy, setStatusFilter, setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;