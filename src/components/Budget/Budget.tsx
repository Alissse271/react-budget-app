import { BudgetCard } from "components/BudgetCard/BudgetCard";
import { CurrencySelect } from "components/CurrencySelect/CurrencySelect";
import { RemainingCard } from "components/RemainingCard/RemainingCard";
import { SpentCard } from "components/SpentCard/SpentCard";
import { Title } from "components/Title/Title";
import { BudgetTitleContainer, CardsContainer, StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <BudgetTitleContainer>
        <Title label={"Budget"} />
        <CurrencySelect />
      </BudgetTitleContainer>
      <CardsContainer>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </CardsContainer>
    </StyledBudget>
  );
};
