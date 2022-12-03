import { EditBudgetInput } from "components/EditBudgetInput/EditBudgetInput";
import { useBudgetContext } from "context/BudgetContext";
import { useCurrencyContext } from "context/CurrencyContext";
import { useInput } from "hooks";
import { useState } from "react";
import { EditButton, StyledBudgetCard, Title } from "./styles";

export const BudgetCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();
  const [label, setLabel] = useState("Edit");
  const [isEdit, setIsEdit] = useState(true);
  const enteredBudget = useInput();

  const handleGetValue = () => {
    setNewBudget({ label: enteredBudget.value, value: +enteredBudget.value });
  };

  const Rendercontent = (): JSX.Element => {
    if (isEdit) {
      return (
        <Title>
          Budget: {curentCurrency.value}
          {budget.value}
        </Title>
      );
    }

    return <EditBudgetInput type={"number"} placeholder={"Enter  budget ..."} {...enteredBudget} />;
  };

  const handleEnterBudget = () => {
    setLabel(label === "Edit" ? "Save" : "Edit");
    setIsEdit((isEdit) => !isEdit);
    handleGetValue();
  };
  return (
    <StyledBudgetCard>
      {Rendercontent()}
      <EditButton type="button" onClick={handleEnterBudget}>
        {label}
      </EditButton>
    </StyledBudgetCard>
  );
};
