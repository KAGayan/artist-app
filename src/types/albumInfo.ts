import { AlbumImage } from './album';

interface Tag {
    name: string;
    url: string;
}

interface Attributes {
    rank: number;
}

interface TrackList {
    name: string;
    duration: number;
    url: string;
    ['@attr']: Attributes;
}

interface Track {
    track: TrackList | TrackList[];
}

interface Wiki {
    content: string;
    published: string;
    summary: string;
}

export interface AlbumInfo {
    artist: string;
    image: AlbumImage[];
    listeners: string
    mbid: string;
    name: string;
    playcount: string;
    tags: Tag[];
    tracks: Track;
    wiki: Wiki;
}

export interface AlbumsRespons {
    album: AlbumInfo;
}
