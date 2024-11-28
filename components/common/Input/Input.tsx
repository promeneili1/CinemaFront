import { ComponentPropsWithoutRef } from "react";
import { Label, Input as StyledInput } from "./Input.styled"; // Izmeni naziv ovde

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  type: string;
}

const CustomInput = ({ label, type, ...props }: InputProps) => {
  return (
    <>
      <Label>{label}</Label>
      {/* TODO - add check for different input type */}
      <StyledInput {...props} />
    </>
  );
};

export default CustomInput;
