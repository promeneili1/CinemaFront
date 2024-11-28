import { ComponentPropsWithoutRef } from "react";
import { Buttons  } from "./Button.styled";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: JSX.Element;
  variant?: "primary" | "secondary" | "close";
  onClick: () => void;
}

const Button = ({ children, onClick ,  variant = "primary"  }: ButtonProps) => {
  return <Buttons onClick={onClick} variant={variant}>{children}</Buttons>
};

export default Button;
