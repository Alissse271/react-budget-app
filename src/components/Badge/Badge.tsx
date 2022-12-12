import { useCurrencyContext } from "context";
import { ReactNode } from "react";
import { StyledBudge } from "./styles";

interface IProps {
  value: string;
}

export const Badge = ({ value }: IProps) => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledBudge>
      {curentCurrency.value}
      {value}
    </StyledBudge>
  );
};
