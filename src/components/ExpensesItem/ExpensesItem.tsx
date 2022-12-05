import { Badge } from "components/Badge/Badge";
import { IExpense } from "context/ExpensesContext/types";
import { ButtonDelete, StyledExpensesItem, Container, ExpenseName } from "./styles";
import { useExpensesContext } from "context/ExpensesContext";

interface IProps {
  expense: IExpense;
}

export const ExpensesItem = ({ expense }: IProps) => {
  const { removeExpense } = useExpensesContext();
  const handleDeleteExpense = () => {
    removeExpense(expense.id);
  };
  return (
    <StyledExpensesItem>
      <ExpenseName>{expense.name}</ExpenseName>
      <Container>
        <Badge>{expense.cost}</Badge>
        <ButtonDelete
          type="button"
          onClick={() => {
            handleDeleteExpense();
          }}
        >
          {}
        </ButtonDelete>
      </Container>
    </StyledExpensesItem>
  );
};
