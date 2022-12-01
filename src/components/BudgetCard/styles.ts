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

const EditButton = styled.button`
  min-width: 85px;
  padding: 10px 26px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;

  background: #fff;
  border-radius: 10px;

  cursor: pointer;
`;

const Input = styled.input`
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

export { StyledBudgetCard, Title, EditButton, Input };
