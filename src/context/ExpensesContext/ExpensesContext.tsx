import { createContext, useState } from "react";
import { IExpensesContext, IExpensesContextProviderProps } from "./types";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [
      {
        name: "relax",
        cost: 200,
      },
      {
        name: "shopping",
        cost: 400,
      },
      {
        name: "study",
        cost: 100,
      },
      {
        name: "drinking",
        cost: 250,
      },
    ],
  }));
  return expensesContext;
};

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
