export interface Episode {
    episode_id: number;
    title: string;
    title_japanese: string;
    title_romanji: string;
    aired: Date;
    filler: boolean;
    recap: boolean;
    video_url: string;
    forum_url: string;
}

export interface HomeInterface {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    episodes_last_page: number;
    episodes: Episode[];
}