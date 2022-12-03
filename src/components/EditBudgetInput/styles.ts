import styled from "styled-components";

const StyledInput = styled.input`
  width: 153px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.6);

  background-color: transparent;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
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

export { StyledInput };
