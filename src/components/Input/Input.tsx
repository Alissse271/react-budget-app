import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IInput {
  type: "text";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange }: IInput) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};
