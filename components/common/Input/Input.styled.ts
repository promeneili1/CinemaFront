import styled from "styled-components";

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%; 
  box-sizing: border-box;
  transition: border 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  margin-bottom: 20px;
`
export const Label = styled.label`
  font-size: 18px; 
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: #333;
`
export const Select = styled.select`
  padding: 8px;
  font-size: 14px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`







