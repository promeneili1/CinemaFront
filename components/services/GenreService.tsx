import axios from "axios";
import { Genre } from "../../models/Genre";

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);

const genresApi = axios.create({
  baseURL: `${BASE_URL}/genres`,
});

export const GetAllGenre = {
  getGenres: async () => {
    try {
      const response = await genresApi.get<Genre[]>("/all");
      return response.data;
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
  
