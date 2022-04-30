import {
  Routes,
  Route,
} from 'react-router-dom';
import { AlbumList, AlbumInfo } from 'components';
import { ALBUM_PATHS } from './paths';

export const AlbumRoutes = () => (
  <Routes>
    <Route path={ALBUM_PATHS.albumInfo} element={<AlbumInfo />} />
    <Route path={ALBUM_PATHS.albumsList} element={<AlbumList />} />
  </Routes>
);
