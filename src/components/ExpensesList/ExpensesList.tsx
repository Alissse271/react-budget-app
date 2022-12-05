import { ExpensesItem } from "components/ExpensesItem/ExpensesItem";
import { useExpensesContext } from "context/ExpensesContext";
import { EmptyList, StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  if (expenses.length) {
    return (
      <StyledExpensesList>
        {expenses.map((item) => {
          return <ExpensesItem expense={item} key={item.name} />;
        })}
      </StyledExpensesList>
    );
  }
  return (
    <EmptyList>
      <p>Oooops 🙈</p>
    </EmptyList>
  );
};
