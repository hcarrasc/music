export interface Picture {
    data: number[];
    format: string;
}

export interface Tags {
    title?: string;
    artist?: string;
    album?: string;
    picture?: Picture;
}

interface TagData {
    tags: Tags;
}
