import { Title, CurrencySelect, BudgetCard, RemainingCard, SpentCard } from "components";
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
