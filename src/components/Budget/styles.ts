import styled from "styled-components";

const StyledBudget = styled.div``;
const BudgetTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 30px;
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-row-gap: 20px;
`;

export { StyledBudget, BudgetTitleContainer, CardsContainer };
