import { useBudgetContext, useCurrencyContext, useExpensesContext } from "context";
import { StyledRemainingCard, Title } from "./styles";

export const RemainingCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaining = budget.value - expenses.reduce((remaining, { cost }) => remaining + +cost, 0);
  const isOverspent = remaining < 0;

  return (
    <StyledRemainingCard $isOverspending={isOverspent}>
      <Title>
        {isOverspent ? "Overspending by " : "Remaining:"}
        {curentCurrency.value}
        {Math.abs(remaining)}
      </Title>
    </StyledRemainingCard>
  );
};
