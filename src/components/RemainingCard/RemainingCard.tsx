import { useBudgetContext } from "context/BudgetContext";
import { useCurrencyContext } from "context/CurrencyContext";
import { useExpensesContext } from "context/ExpensesContext";
import { useState } from "react";
import { StyledRemainingCard, Title } from "./styles";

export const RemainingCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const [isOverspending, setIsOverspending] = useState(false);

  const remaining = budget.value - expenses.reduce((remaining, { cost }) => remaining + +cost, 0);

  return (
    <StyledRemainingCard $isOverspending={isOverspending}>
      <Title>
        Remaining: {curentCurrency.value}
        {Math.abs(remaining)}
      </Title>
    </StyledRemainingCard>
  );
};
