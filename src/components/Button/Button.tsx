import { StyledButton } from "../Button/styles";

export interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
}

export const Button = ({ type, label }: IButton) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};
