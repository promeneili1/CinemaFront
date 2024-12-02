import { Label, Input as StyledInput } from "./Input.styled";
import CustomSelect from "../Select/Select";

interface InputProps {
  name: string;
  label: string;
  type: string; 
  value: string | string[] | number;
  options?: { label: string; value: any }[];
  multiple: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const CustomInput = ({ label, type, options, multiple, ...props }: InputProps) => {
 

  return (
    <div>
      <Label>{label}</Label>
      {type === "select" && options ? (
        <CustomSelect
          name={props.name}
          value={props.value as string | string[]}
          multiple={multiple}
          options={options}
          onChange={props.onChange}
        />
      ) : (
        <StyledInput {...props} />
      )}
    </div>
  );
};

export default CustomInput;
