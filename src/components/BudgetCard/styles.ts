import styled from "styled-components";

const StyledBudgetCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  background: #7cc6fe;
  border-radius: 10px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;

const StyledButton = styled.button`
  min-width: 85px;
  padding: 10px 26px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;

  background: #fff;
  border-radius: 10px;

  cursor: pointer;
`;

export { StyledBudgetCard, Title, StyledButton };
