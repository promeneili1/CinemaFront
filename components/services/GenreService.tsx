import axios from "axios";
import { Genre } from "../../models/Genre";

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);

const genresApi = axios.create({
  baseURL: `${BASE_URL}/genres`,
});



export const GetAllGenre = {
  getGenres: async (): Promise<{ value: number; label: string }[]> => {
    try {
      const response = await genresApi.get<Genre[]>("/all");  // Fetching array of Genre objects
      return response.data.map((genre) => ({
        value: genre.id,  // genre.id is used as value
        label: genre.name,  // genre.name is used as label
      }));
    } catch (error) {
      console.error("Error fetching genres:", error);
      throw error;
    }
  },
};


interface GenreModel {
  name: string;
}

export const createGenre = async (formData: GenreModel) => {
    try {
      const response = await axios.post(`${BASE_URL}`, {...formData}); 
      console.log("Response from server:", response.data); 
      return response.data; 
    } catch (error) {
      console.error("Error creating movie:", error);
      throw error;
    }
  };
  
