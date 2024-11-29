import { Label, Input as StyledInput, Select } from "./Input.styled";

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

const CustomInput = ({
  label,
  type,
  options,
  multiple,
  ...props
}: InputProps) => {
  return (
    <div>
      <Label>{label}</Label>
      {type === "select" ? (
        <Select {...props} multiple={multiple} value={props.value}>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <StyledInput {...props} />
      )}
    </div>
  );
};

export default CustomInput;
