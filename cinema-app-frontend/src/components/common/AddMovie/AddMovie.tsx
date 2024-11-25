import { AddForm, Button, FormContainer, Text, Title } from "./AddMovie.styled";

const AddMovie = () => {
  return (
    <FormContainer>
      <AddForm>
        <Title>Add Movie</Title>
        <Text>
          <label>Movie Name: </label>
          <input type="text"></input>
        </Text>
        <Text>
          <label>Original Name: </label>
          <input type="text"></input>
        </Text>
        <Text>
          <label>Genres: </label>
          <input type="text"></input>
        </Text>
        <Text>
          <label>Duration: </label>
          <input type="text"></input>
        </Text>
        {/* TODO - make button a separate component */}
        <Button>Add Movie</Button>
      </AddForm>
    </FormContainer>
  );
};

export default AddMovie;
