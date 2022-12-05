import { createContext, useContext, useState } from "react";
import { IExpense, IExpensesContext, IExpensesContextProviderProps } from "./types";
import { v4 as uuidv4 } from "uuid";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [
      {
        name: "relax",
        cost: 200,
        id: "asdf-ds-fgbvdfgd",
      },
      {
        name: "shopping",
        cost: 400,
        id: "dsfj-df-werefvxd",
      },
      {
        name: "study",
        cost: 100,
        id: "vfrd-sd-aswesdfh",
      },
      {
        name: "drinking",
        cost: 250,
        id: "bngg-se-sdfsdfsd",
      },
    ],
    setNewExpense: (newExpense: IExpense) => {
      setExpensesContext({
        expenses: [...Object.values(expensesContext), { newExpense, id: uuidv4() }],
      });
    },
  }));
  return expensesContext;
};

export const useExpensesContext = () => useContext(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
