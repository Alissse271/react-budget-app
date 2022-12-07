import { createContext, useContext, useState } from "react";
import { IBudgetContext, IBudgetContextProviderProps } from "./types";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: { value: 0 },
    setNewBudget: (budget) => {
      setBudgetContext((ctx) => ({ ...ctx, budget }));
    },
  }));

  return budgetContext;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
