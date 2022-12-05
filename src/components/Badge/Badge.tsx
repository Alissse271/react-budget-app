import { useCurrencyContext } from "context/CurrencyContext";
import { ReactNode } from "react";
import { StyledBudge } from "./styles";

interface IProps {
  children: ReactNode;
}

export const Badge = ({ children }: IProps) => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledBudge>
      {curentCurrency.value}
      {children}
    </StyledBudge>
  );
};
