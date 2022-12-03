import { ExpensesItem } from "components/ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  return (
    <StyledExpensesList>
      <ExpensesItem />
    </StyledExpensesList>
  );
};
