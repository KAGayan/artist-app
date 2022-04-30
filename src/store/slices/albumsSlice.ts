import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiService } from 'api';
import { TopAlbums } from 'types';

export const getTopAlbums = createAsyncThunk(
  'albums/getTopAlbumsStatus',
  async () => {
    const topalbums = await apiService.Album.getAlbums();
    return topalbums;
  },
);

interface AlbumsState {
    topalbums?: TopAlbums,
    loading: boolean,
}

const initialState: AlbumsState = {
  topalbums: undefined,
  loading: false,
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopAlbums.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopAlbums.fulfilled, (state, action) => {
        state.topalbums = action.payload.topalbums;
        state.loading = false;
      });
  },
});

export const topalbums = albumsSlice.reducer;

export const albumsActions = { getTopAlbums };
