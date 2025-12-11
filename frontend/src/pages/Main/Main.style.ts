import styled from "styled-components";
import { SearchWrapper } from "../../components/SearchBar/SearchBar.style";
import { ButtonStyle } from "../../components/Button/Button.style";

export const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.bg};
    padding: 14px;

    & ${SearchWrapper} {
        margin-inline: auto;
        margin-block-end: 20px;
    }

    & ${ButtonStyle} {
        margin: auto;
    }
`

