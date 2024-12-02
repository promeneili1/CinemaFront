import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

type MovieScreeningInput = {
 
};

export const getFilteredScreenings = async (filters: MovieScreeningInput) => {
  try {
    const queryParams = new URLSearchParams(filters as any).toString();
    console.log("Query Params when no filters:", queryParams);
    //   TODO - check what is the value of queryParams when no filters exist
    const response = await axios.get(
      `${BASE_URL}/movies_screening/filter?${queryParams}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie screenings:", error);
    return null;
  }
};
