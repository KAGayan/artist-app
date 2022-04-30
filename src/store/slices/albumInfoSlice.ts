import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiService } from 'api';
import { AlbumInfo } from 'types';

export const getAlbumInfoByName = createAsyncThunk(
  'albums/albumInfoByNameStatus',
  async (albumName: string) => {
    const albumInfo = await apiService.Album.getAlbumInfo(albumName);
    return albumInfo;
  },
);

interface AlbumsState {
  albumInfo?: AlbumInfo,
  loading: boolean,
}

const initialState: AlbumsState = {
  albumInfo: undefined,
  loading: false,
};

const albumInfoSlice = createSlice({
  name: 'albumInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlbumInfoByName.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAlbumInfoByName.fulfilled, (state, action) => {
        state.albumInfo = action.payload.album;
        state.loading = false;
      });
  },
});

export const albumInfo = albumInfoSlice.reducer;

export const albumInfoActions = { getAlbumInfoByName };
