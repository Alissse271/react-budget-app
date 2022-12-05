import { useCurrencyContext } from "context/CurrencyContext";
import { useExpensesContext } from "context/ExpensesContext";
import { StyledSpentCard, Title } from "./styles";

export const SpentCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spentMoney = expenses.reduce((total, { cost }) => total + +cost, 0);
  return (
    <StyledSpentCard>
      <Title>
        Spent so far: {curentCurrency.value}
        {spentMoney}
      </Title>
    </StyledSpentCard>
  );
};
