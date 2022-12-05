import styled from "styled-components";

const StyledSearch = styled.input`
  width: 100%;
  padding: 15px 20px;

  font-size: 16px;
  line-height: 1.1875;
  color: #000;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &::placeholder {
    color: #999;
  }
  &:focus-visible {
    outline-width: 0px;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export { StyledSearch };
