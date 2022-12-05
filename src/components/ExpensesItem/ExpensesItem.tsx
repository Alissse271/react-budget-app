import { Badge } from "components/Badge/Badge";
import { IExpense } from "context/ExpensesContext/types";
import { ButtonDelete, StyledExpensesItem, Container, ExpenseName } from "./styles";
import { useState } from "react";

interface IProps {
  expense: IExpense;
}

export const ExpensesItem = ({ expense }: IProps) => {
  // const [] = useState();
  const handleDeleteExpense = () => {};
  return (
    <StyledExpensesItem>
      <ExpenseName>{expense.name}</ExpenseName>
      <Container>
        <Badge />
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
