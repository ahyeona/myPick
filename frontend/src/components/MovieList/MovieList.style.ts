import styled from 'styled-components'
import { MovieContainer } from '../Movie/Movie.style'

export const MovieListContainer = styled.div`
    border: 1px solid blue;
    width: 100vw;
    overflow: scroll;

    /* &>div {
        
    } */

    & ${MovieContainer} {
        background-color: aliceblue;
        margin-inline: 20px;
    }
`
export const CaptionStyle = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
`