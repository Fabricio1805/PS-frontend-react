import { InputHTMLAttributes } from "react";
import * as C from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: InputProps) => {
  return (
    <C.Input {...rest} />
  );
};
