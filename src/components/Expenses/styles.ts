import styled from "styled-components";

const StyledExpenses = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 30px;
`;

const EmptyList = styled.div`
  display: grid;
  place-items: center;

  height: 200px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.2;
`;

export { StyledExpenses, EmptyList, Text };
