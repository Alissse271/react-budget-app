import { ExpensesList, Search, Title } from "components";
import { useExpensesContext } from "context";
import { IExpense } from "context/ExpensesContext/types";
import { useDebounce, useInput } from "hooks";
import { useEffect, useState } from "react";
import { EmptyList, StyledExpenses, Text } from "./styles";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const search = useInput();
  const [filteredList, setFilteredList] = useState<IExpense[]>(expenses);
  const debauncedValue = useDebounce(search.value, 500);

  useEffect(() => {
    setFilteredList(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase())),
    );
  }, [expenses, debauncedValue]);

  return (
    <StyledExpenses>
      <Title label={"Expenses"} />
      <Search type={"search"} placeholder={"search..."} {...search} />
      {filteredList.length ? (
        <ExpensesList expenses={filteredList} />
      ) : (
        <EmptyList>
          <Text>Oooops 🙈</Text>
        </EmptyList>
      )}
    </StyledExpenses>
  );
};
