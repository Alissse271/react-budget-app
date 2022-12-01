import { Search } from "components/Search/Search";
import { Title } from "components/Title/Title";
import { useInput } from "hooks";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  return (
    <StyledExpenses>
      <Title label={"Expenses"} />
      <Search type={"search"} placeholder={"search..."} {...search} />
    </StyledExpenses>
  );
};
