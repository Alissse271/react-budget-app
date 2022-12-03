import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  name: string;
  cost: number;
}

export interface IExpensesContext {
  expenses: IExpense[];
}
