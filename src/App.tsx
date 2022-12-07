import { Budget } from "components";
import { Expenses } from "components";
import { Form } from "components";
import { GlobalStyles } from "GlobalStyles";
import { StyledApp } from "styles";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Budget />
      <Expenses />
      <Form />
    </StyledApp>
  );
};
