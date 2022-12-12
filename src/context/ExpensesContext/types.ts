import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  name: string;
  cost: string;
  id: string;
}

export interface IExpensesContext {
  expenses: IExpense[];
  setNewExpense: (newExpense: IExpense) => void;
  deleteExpense: (id: string) => void;
}
