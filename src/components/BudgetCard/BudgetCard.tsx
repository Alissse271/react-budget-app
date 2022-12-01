import { useCurrencyContext } from "context/CurrencyContext";
import { useInput } from "hooks";
import { useState } from "react";
import { EditButton, Input, StyledBudgetCard, Title } from "./styles";

export const BudgetCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const [label, setLabel] = useState("Edit");
  const [isEdit, setIsEdit] = useState(true);
  const budget = useInput();

  const Rendercontent = (): JSX.Element => {
    if (isEdit) {
      return <Title>Budget: {curentCurrency.value}</Title>;
    }
    return <Input type={"number"} placeholder={"Enter  budget ..."} {...budget} />;
  };

  const handleEnterBudget = () => {
    setLabel(label === "Edit" ? "Save" : "Edit");
    setIsEdit((isEdit) => !isEdit);
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
