import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IEditBudgetInput {
  type: "text" | "number";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EditBudgetInput = ({ type, placeholder, value, onChange }: IEditBudgetInput) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};
