import { useCurrencyContext } from "context/CurrencyContext";
import { StyledBudgetCard, Title } from "./styles";

export const BudgetCard = () => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledBudgetCard>
      <Title>Budget: {curentCurrency.value}</Title>
    </StyledBudgetCard>
  );
};
