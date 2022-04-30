import { topalbums, albumsActions } from './albumsSlice';
import { albumInfo, albumInfoActions } from './albumInfoSlice';

export const reducer = {
  topalbums,
  albumInfo,
};

export const actions = {
  ...albumsActions,
  ...albumInfoActions,
};
