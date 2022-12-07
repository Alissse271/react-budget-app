import { EditBudgetInput } from "components";
import { useBudgetContext, useCurrencyContext } from "context";
import { useInput, useToggle } from "hooks";
import { useState } from "react";
import { EditButton, StyledBudgetCard, Title } from "./styles";

export const BudgetCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();
  const [label, setLabel] = useState("Edit");
  const enteredBudget = useInput();
  const [isEditMode, toggleInput] = useToggle(false);

  const handleGetValue = () => {
    setNewBudget({ value: +enteredBudget.value });
  };

  const handleEnterBudget = () => {
    setLabel(label === "Edit" ? "Save" : "Edit");
    toggleInput();
    handleGetValue();
  };
  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <EditBudgetInput type={"number"} placeholder={"Enter  budget ..."} {...enteredBudget} />
      ) : (
        <Title>
          Budget: {curentCurrency.value}
          {budget.value}
        </Title>
      )}
      <EditButton type="button" onClick={handleEnterBudget}>
        {label}
      </EditButton>
    </StyledBudgetCard>
  );
};
