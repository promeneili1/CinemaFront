import React, { useEffect, useState } from "react";
import { GetAllGenre } from "../../services/GenreService";
import { Genre } from "../../../models/Genre";
import Button from "../Button/Button";
import CustomInput from "../Input/Input";
import { DynamicForm as StyledDynamicForm } from "./DynamicForm.styled";
import { InputWrapper } from "../Input/Input.styled";

interface Field {
  label: string;
  type: string;
  name: string;
  value: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  children?: JSX.Element;
}

interface DynamicFormProps {
  fields: Field[];
  handleSubmit: (event: React.FormEvent) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, handleSubmit }) => {
  const [genres, setGenres] = useState<{ label: string; value: any }[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await GetAllGenre.getGenres();
        const genreNames = genreData.map((genre: Genre) => ({
          label: genre.name,
          value: genre.id,
        }));
        setGenres(genreNames);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <StyledDynamicForm onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <InputWrapper key={index}>
          <CustomInput
            name={field.name}
            label={field.label}
            type={field.type}
            value={field.value}
            options={genres}
            multiple={true}
            onChange={field.onChange}
          />
        </InputWrapper>
      ))}
      <Button type="submit" variant="primary">
        <>Submit</>
      </Button>
    </StyledDynamicForm>
  );
};

export default DynamicForm;
