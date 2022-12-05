import styled from "styled-components";
import deleteIcon from "../../assets/icons/close.svg";
const ExpenseName = styled.span`
  font-size: 16px;
  line-height: 1.1875;
`;
const StyledExpensesItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 20px;

  border-bottom: 2px solid #ccd5ff;
  list-style: none;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 20px;
`;

const ButtonDelete = styled.button`
  align-self: center;

  background: center no-repeat url(${deleteIcon});
  width: 15px;
  height: 15px;

  cursor: pointer;
`;
export { StyledExpensesItem, ButtonDelete, Container, ExpenseName };
