import { apiRequest } from 'api';
import { env } from 'config';
import { AlbumsRespons, TopAlbumsRespons } from 'types';

export const Album = {
  getAlbums: () => apiRequest.get<TopAlbumsRespons>(
    `/?method=artist.gettopalbums&artist=${env.ARTIST}&api_key=${env.API_KEY}&format=json`,
  ),
  getAlbumInfo: (albumName: string) => apiRequest.get<AlbumsRespons>(
    `/?method=album.getinfo&api_key=${env.API_KEY}&artist=${env.ARTIST}&album=${albumName}&format=json`,
  ),
};
