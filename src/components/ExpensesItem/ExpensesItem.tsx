import { Badge } from "components/Badge/Badge";
import { ButtonDelete, StyledExpensesItem, Container, ExpenseName } from "./styles";

// key!!!!!

export const ExpensesItem = () => {
  return (
    <StyledExpensesItem>
      <ExpenseName>moment</ExpenseName>
      <Container>
        <Badge />
        <ButtonDelete type="button">{}</ButtonDelete>
      </Container>
    </StyledExpensesItem>
  );
};
