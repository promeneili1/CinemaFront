import { ComponentPropsWithoutRef } from "react";
import { Button } from "./Button.styled";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: JSX.Element;
  handleClick: () => void;
}

// TODO - rename to Button
const Buttons = ({ children, handleClick }: ButtonProps) => {
  return <Button onClick={handleClick}>{children}</Button>;
};


export default Buttons;
