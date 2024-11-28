import styled from "styled-components";

export const Buttons = styled.button<{ variant: "primary" | "secondary" | "close" }>`
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;


  background-color: ${({ variant }) => (variant === "primary" ? "#007bff" : variant === "secondary" ? "#f0f0f0" : "red")};
  color: ${({ variant }) => (variant === "primary" ? "#fff" : variant === "secondary" ? "#333" : "#fff")};
  border: ${({ variant }) => (variant === "primary" ? "1px solid #007bff" : variant === "secondary" ? "1px solid #ccc" : "1px solid red")};

  &:focus {
    outline: none;
  }
`