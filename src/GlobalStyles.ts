import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
a {
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
    font-size: 16px;
}

* {
    font-family: 'Inter', sans-serif;
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

#root {
    display: grid;
    place-items: center;

    background: #1E3542;
}
`;
