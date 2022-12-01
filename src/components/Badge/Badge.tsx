import { useCurrencyContext } from "context/CurrencyContext";
import { StyledBudge } from "./styles";

export const Badge = () => {
  const { curentCurrency } = useCurrencyContext();
  return <StyledBudge>{curentCurrency.value}</StyledBudge>;
};
