import React from "react";

interface SelectProps {
  name: string;
  value: string | string[];
  multiple?: boolean;
  options: { label: string; value: any }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect = ({
    name,
    value,
    multiple = false,
    options,
    onChange,
  }: SelectProps) => {
    return (
      <select name={name} value={value} multiple={multiple} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  

export default CustomSelect;
