import { useCurrencyContext } from "context/CurrencyContext";
import { StyledRemainingCard, Title } from "./styles";

export const RemainingCard = () => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledRemainingCard>
      <Title>Remaining: {curentCurrency.value}</Title>
    </StyledRemainingCard>
  );
};
