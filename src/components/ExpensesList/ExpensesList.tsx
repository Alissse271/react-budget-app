import { ExpensesItem } from "components/ExpensesItem/ExpensesItem";
import { useExpensesContext } from "context/ExpensesContext";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledExpensesList>
      {expenses.map((item) => {
        return <ExpensesItem expense={item} key={item.name} />;
      })}
    </StyledExpensesList>
  );
};
