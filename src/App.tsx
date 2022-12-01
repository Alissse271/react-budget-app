import { Budget } from "components/Budget/Budget";
import { Expenses } from "components/Expenses/Expenses";
import { GlobalStyles } from "GlobalStyles";
import { StyledApp } from "styles";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Budget />
      <Expenses />
    </StyledApp>
  );
};
