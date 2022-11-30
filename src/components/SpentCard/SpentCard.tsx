import { useCurrencyContext } from "context/CurrencyContext";
import { StyledSpentCard, Title } from "./styles";

export const SpentCard = () => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledSpentCard>
      <Title>Spent so far: {curentCurrency.value}</Title>
    </StyledSpentCard>
  );
};
