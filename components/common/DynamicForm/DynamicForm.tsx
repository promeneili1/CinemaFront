import React, { useEffect, useState } from "react";
import { GetAllGenre } from "../../services/GenreService";
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
  children?: never;
  multiple?: boolean; 
  options?: { label: string; value: any }[]; 
  required?: boolean; 
  pattern?: string;   
  title?: string;     
  min?: number;       
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
        setGenres(genreData);  
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
            options={field.options} 
            multiple={field.multiple ?? false}
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
