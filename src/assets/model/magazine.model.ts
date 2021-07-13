export interface Meta {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Author {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface Manga {
    mal_id: number;
    url: string;
    title: string;
    image_url: string;
    synopsis: string;
    type: string;
    publishing_start?: Date;
    volumes?: number;
    members: number;
    genres: Genre[];
    authors: Author[];
    score?: number;
    serialization: string[];
}

export interface MagazineInterface {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    meta: Meta;
    manga: Manga[];
}