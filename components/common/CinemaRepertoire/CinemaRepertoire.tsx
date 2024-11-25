import { Text, CardContainer, CardImage } from "./CinemaRepertoire.styled";
import movies from "../../../data/movies.json";
import { MovieScreening } from "../../../models/MovieScreening";
import { CardWrapper } from "./CinemaRepertoire.styled"; 
import { MainContent } from "../Footer/Footer.styled"; 

const CinemaRepertoire = () => {
  return (
    <MainContent> {}
      <CardWrapper>
        {movies.map(
          ({
            id,
            imageUrl,
            title,
            duration,
            genres,
            originalTitle,
          }: MovieScreening) => (
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
      </CardWrapper>
    </MainContent>
  );
};

export default CinemaRepertoire;
