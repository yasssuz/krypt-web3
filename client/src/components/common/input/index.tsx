import { ChangeEvent, RefObject } from "react";

interface InputProps {
  name: string;
  type: "text" | "number" | "password" | "email";
  id?: string;
  placeholder?: string;
  onChange?(e: ChangeEvent): void;
  step?: string;
  forwardRef?: RefObject<HTMLInputElement>;
  className?: string;
}

const Input = ({ forwardRef, ...props }: InputProps): JSX.Element => {
  return <input {...props} ref={forwardRef} />;
};

export default Input;
