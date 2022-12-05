import { createContext, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProviderProps } from "./types";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [
      {
        name: "relax",
        cost: "200",
        id: "asdf-ds-fgbvdfgd",
      },
      {
        name: "shopping",
        cost: "400",
        id: "dsfj-df-werefvxd",
      },
      {
        name: "study",
        cost: "100",
        id: "vfrd-sd-aswesdfh",
      },
      {
        name: "drinking",
        cost: "250",
        id: "bngg-se-sdfsdfsd",
      },
    ],
    setNewExpense: (newExpense) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, newExpense],
      }));
    },
    removeExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
