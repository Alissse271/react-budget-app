import { useBudgetContext } from "context/BudgetContext";
import { useCurrencyContext } from "context/CurrencyContext";
import { useExpensesContext } from "context/ExpensesContext";
import { useEffect, useState } from "react";
import { StyledRemainingCard, Title } from "./styles";

export const RemainingCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const [isOverspending, setIsOverspending] = useState(false);

  const remaining = budget.value - expenses.reduce((remaining, { cost }) => remaining + +cost, 0);

  useEffect(() => {
    remaining < 0 ? setIsOverspending(true) : setIsOverspending(false);
  }, [remaining]);

  return (
    <StyledRemainingCard $isOverspending={isOverspending}>
      <Title>
        {isOverspending ? "Overspending by: " : "Remaining: "}
        {curentCurrency.value}
        {Math.abs(remaining)}
      </Title>
    </StyledRemainingCard>
  );
};
