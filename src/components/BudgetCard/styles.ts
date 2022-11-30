import styled from "styled-components";

const StyledBudgetCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 335px;
  padding: 0 20px;

  background: #7cc6fe;
  border-radius: 10px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;
export { StyledBudgetCard, Title };
