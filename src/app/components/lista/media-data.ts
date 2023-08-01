export interface Imovie {
    Age?: number;
    CategoryId: number;
    CoverPath: string;
    Id: string;
    Name: string;
    Path: string;
    Runtime?: number;
    Synopsis?: string;
    UUID?: string;
    ViewCount?: number;
    ViewOnLocalPlayer?: boolean;
    Year?: number;
    Type?: number | undefined;
    Origin: string;
}
  
export interface Iserie {
    Id: number;
    Number: number;
    Name?: string;
    Path: string;
    Runtime?: number;
    SeasonId?: number,
    SeriesId?: number,
    Title: string,
    Synopsis?: string;
    UUID?: string;
    ViewCount?: number;
    ViewOnLocalPlayer?: boolean;
    Year?: number;
    Type?: number | undefined;
    Origin: string;
}

export class MediaData {
}
