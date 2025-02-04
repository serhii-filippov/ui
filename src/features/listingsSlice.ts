import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchListings } from '../services/listingsAPI';
import { ListingItem, ListingsState } from '../types/types';

const initialState: ListingsState = {
  listings: [],
  status: 'idle',
  error: null,
};

export const fetchListingsAsync = createAsyncThunk<ListingItem[]>(
  'listings/fetchListings',
  async () => {
    const response = await fetchListings();

    return response;
  }
);

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListingsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.listings = action.payload;
      })
      .addCase(fetchListingsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch listings';
      });
  },
});

export default listingsSlice.reducer;