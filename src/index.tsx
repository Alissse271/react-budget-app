import { AppContext } from "context/AppContext";
import { CurrencyContextProvider } from "context/CurrencyContext";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext components={[CurrencyContextProvider]}>
    <App />
  </AppContext>,
);
