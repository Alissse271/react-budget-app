import styled from "styled-components";

const StyledExpensesList = styled.ul`
  height: 200px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const EmptyList = styled.div`
  display: grid;
  place-items: center;

  height: 200px;

  font-size: 20px;
  line-height: 1.2;
`;

export { StyledExpensesList, EmptyList };
