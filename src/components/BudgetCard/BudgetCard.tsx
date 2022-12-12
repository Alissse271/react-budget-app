import { EditBudgetInput } from "components";
import { useBudgetContext, useCurrencyContext } from "context";
import { useInput, useToggle } from "hooks";
import { useState } from "react";
import { StyledButton, StyledBudgetCard, Title } from "./styles";

export const BudgetCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();
  const enteredBudget = useInput();
  const [isEditMode, toggleInput] = useToggle(false);

  const handleSave = () => {
    setNewBudget({ value: +enteredBudget.value });
    toggleInput();
  };

  const handleEdit = () => toggleInput();

  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <EditBudgetInput type={"number"} placeholder={"Enter  budget ..."} {...enteredBudget} />
          <StyledButton type="button" onClick={handleSave}>
            Save
          </StyledButton>
        </>
      ) : (
        <>
          <Title>
            Budget: {curentCurrency.value}
            {budget.value}
          </Title>
          <StyledButton type="button" onClick={handleEdit}>
            Edit
          </StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};
