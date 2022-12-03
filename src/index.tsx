import { AppContext } from "context/AppContext";
import { BudgetContextProvider } from "context/BudgetContext";
import { CurrencyContextProvider } from "context/CurrencyContext";
import { ExpensesContextProvider } from "context/ExpensesContext";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, BudgetContextProvider, ExpensesContextProvider]}
  >
    <App />
  </AppContext>,
);
