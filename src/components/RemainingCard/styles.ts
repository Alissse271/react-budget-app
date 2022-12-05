import styled from "styled-components";

const StyledRemainingCard = styled.div<{ $isOverspending: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  background: ${({ $isOverspending }) => ($isOverspending ? "#FF0000" : "#ccd5ff")};
  border-radius: 10px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;
export { StyledRemainingCard, Title };
