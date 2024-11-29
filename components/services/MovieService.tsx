import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

type MovieInput = {
  name: string;
  originalName: string;
  posterImage: string;
  duration: number;
  genres: number[];
};

export const createMovie = async (formData: MovieInput) => {
  try {
    const response = await axios.post(`${BASE_URL}/movies`, { ...formData });
    console.log("Response from server:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw error;
  }
};
