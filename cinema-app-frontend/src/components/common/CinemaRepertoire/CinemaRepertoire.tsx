import { Text, CardContainer, CardImage } from "./CinemaRepertoire.styled";
import movies from "../../../data/movies.json";
// TODO - use better naming of the component
const Card = () => {
  return (
    <div>
      {movies.map(
        // TODO - define Movie type
        ({ id, imageUrl, title, duration, genres, originalTitle }) => (
          <CardContainer key={id}>
            <CardImage src={imageUrl} />
            <div>
              <Text>
                <strong>Movie Name:</strong> {title}
              </Text>
              <Text>
                <strong>Original Name:</strong> {originalTitle}
              </Text>
              <Text>
                <strong>Genres:</strong> {genres}
              </Text>
              <Text>
                <strong>Duration:</strong> {duration}
              </Text>
            </div>
          </CardContainer>
        )
      )}
    </div>
  );
};

export default Card;
