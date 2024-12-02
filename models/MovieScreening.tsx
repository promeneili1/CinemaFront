import { Genre } from "./Genre";

export interface MovieScreening {
  genres: Genre[];
  id: number; 
  screeningDate: string; 
  posterImage: string;
  screeningTime: string; 
  ticketPrice: number;
  movieTitle: string;
  isDeleted: boolean; 
}
