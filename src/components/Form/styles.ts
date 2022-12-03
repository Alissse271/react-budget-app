import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 30px;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 20px;
`;

const ErrorMessage = styled.span`
  color: red;
`;
export { StyledForm, InputsContainer, ErrorMessage };
