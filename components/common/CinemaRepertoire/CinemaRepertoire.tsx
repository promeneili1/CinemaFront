import { useState, useEffect } from "react";
import { MovieScreening } from "../../../models/MovieScreening";
import { getFilteredScreenings } from "../../services/MovieScreeningService";
import { MainContent } from "../Footer/Footer.styled";
import {
  CardWrapper,
  CardContainer,
  CardImage,
} from "../CinemaRepertoire/CinemaRepertoire.styled";

const CinemaRepertoire = () => {
  const [movies, setMovies] = useState<MovieScreening[]>([]); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchMoviesScreening = async () => {
      const filters = {
        name: "",
        duration: "",
        genres: [] as number[],
      };
  
      console.log("Fetching movie screenings with filters:", filters); 
  
      const data = await getFilteredScreenings(filters);
      
      if (data) {
        setMovies(data); 
      } else {
        setError("No movies found.");
      }
    };
  
    fetchMoviesScreening();
  }, []);

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <MainContent>
      <CardWrapper>
        {movies.length === 0 ? (
          <div>No movies available.</div> 
        ) : (
          movies.map((movie) => (
            <CardContainer key={movie.id}>
              <CardImage src={movie.posterImage} alt={movie.movieTitle} />
              <div>
                <h3>{movie.movieTitle}</h3> 
                <p>
                  {movie.screeningDate} at {movie.screeningTime} 
                </p>
                <p>Ticket Price: ${movie.ticketPrice}</p> 
              </div>
            </CardContainer>
          ))
        )}
      </CardWrapper>
    </MainContent>
  );
};

export default CinemaRepertoire;
