import { Budget } from "components/Budget/Budget";
import { GlobalStyles } from "GlobalStyles";
import { StyledApp } from "styles";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Budget />
    </StyledApp>
  );
};
