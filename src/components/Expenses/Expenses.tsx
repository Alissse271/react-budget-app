import { ExpensesList } from "components";
import { Search } from "components";
import { Title } from "components";
import { useInput } from "hooks";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  return (
    <StyledExpenses>
      <Title label={"Expenses"} />
      <Search type={"search"} placeholder={"search..."} {...search} />
      <ExpensesList />
    </StyledExpenses>
  );
};
