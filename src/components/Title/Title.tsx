import { StyledTitle } from "./styles";

interface ITitle {
  label: string;
}

export const Title = ({ label }: ITitle) => {
  return <StyledTitle>{label}</StyledTitle>;
};
