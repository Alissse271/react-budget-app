import { ExpensesItem } from "components";
import { IExpense } from "context/ExpensesContext/types";
import { StyledExpensesList } from "./styles";

interface Iprops {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: Iprops) => {
  return (
    <StyledExpensesList>
      {expenses.map((expense) => {
        return <ExpensesItem expense={expense} key={expense.id} />;
      })}
    </StyledExpensesList>
  );
};
