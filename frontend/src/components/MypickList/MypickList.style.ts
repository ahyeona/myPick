import styled from "styled-components"

export const MypickListContainer = styled.div`
    border: 1px solid blue;
    width: 100vw;
    overflow: scroll;

    /* &>div {
        
    } */

    & div {
        background-color: aliceblue;
        margin-inline: 20px;
    }
`
export const CaptionStyle = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
`
