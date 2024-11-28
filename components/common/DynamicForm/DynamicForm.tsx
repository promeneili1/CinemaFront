import React from "react";
import Button from "../Button/Button";
import CustomInput from "../Input/Input";
import { DynamicForm as StyledDynamicForm } from "./DynamicForm.styled";
import { InputWrapper } from "../Input/Input.styled";

interface Field {
  label: string;
  type: string;
  name: string;
  value: string | number | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; 
  children?: JSX.Element;
}

interface DynamicFormProps {
  fields: Field[];
  handleSubmit: () => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, handleSubmit  }) => {
  

  return (
    <StyledDynamicForm onSubmit={(e) => e.preventDefault()}> 
      {fields.map((field, index) => (
        <InputWrapper key={index}>
          <CustomInput
            name={field.name}
            label={field.label}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
          />
        </InputWrapper>
      ))}
      <Button type="submit" variant="primary" onClick={handleSubmit}>
        <>Submit</>
      </Button>
      
    </StyledDynamicForm>
  );
};

export default DynamicForm;
