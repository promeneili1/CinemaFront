import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
    type: string;
  }

  const Input = ({ label, type, ...props }: InputProps) => {
    return (
      <div>
        <label>{label}</label>
        <input ></input>
      </div>
    );
  };
  
export default Input;