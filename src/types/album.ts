interface Attributes {
    artist: string;
    page: string;
    perPage: string;
    total: string;
    totalPages: string;
}

export interface Artist {
    mbid: string;
    name: string;
    url: string;
}

export interface AlbumImage {
    ['#text']: string;
    size: string;
}

export interface Album {
    artist: Artist;
    image: AlbumImage[];
    mbid: string;
    name: string;
    playcount: number;
    url: string;
}

export interface TopAlbums {
    ['@attr']: Attributes;
    album: Album[];
}

export interface TopAlbumsRespons {
    topalbums: TopAlbums;
}
