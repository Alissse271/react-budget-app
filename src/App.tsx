import { Budget } from "components";
import { Expenses } from "components";
import { Form } from "components";
import { StyledApp } from "styles";

export const App = () => {
  return (
    <StyledApp>
      <Budget />
      <Expenses />
      <Form />
    </StyledApp>
  );
};
