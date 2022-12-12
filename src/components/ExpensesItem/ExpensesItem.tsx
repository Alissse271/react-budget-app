import { Badge } from "components";
import { useExpensesContext } from "context";
import { IExpense } from "context/ExpensesContext/types";
import { ButtonDelete, StyledExpensesItem, Container, ExpenseName } from "./styles";

interface IProps {
  expense: IExpense;
}

export const ExpensesItem = ({ expense }: IProps) => {
  const { deleteExpense } = useExpensesContext();
  const handleDeleteExpense = () => {
    deleteExpense(expense.id);
  };
  return (
    <StyledExpensesItem>
      <ExpenseName>{expense.name}</ExpenseName>
      <Container>
        <Badge value={expense.cost} />
        <ButtonDelete type="button" onClick={handleDeleteExpense}>
          {}
        </ButtonDelete>
      </Container>
    </StyledExpensesItem>
  );
};
