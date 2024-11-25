import { Genre } from "./Genre";

export interface Movie {
    id: number;
    name: string;
    originalName: string;
    posterImage: string;
    duration: number;
    genres: Genre[];
}