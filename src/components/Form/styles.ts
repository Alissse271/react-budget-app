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

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;

  font-size: 16px;
  line-height: 19px;
  color: #999999;

  background: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &::placeholder {
    color: #999;
  }
  &:focus-visible {
    outline-width: 0px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;
export { StyledForm, InputsContainer, ErrorMessage, StyledInput };
