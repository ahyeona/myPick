import styled from "styled-components";
import { ButtonStyle } from "../Button/Button.style";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  `

export const Title = styled.span`
  font-weight: bold;
  `

export const GenreName = styled.span`
  font-style: italic;
  margin-inline: 4px;
  `

export const Overview = styled.p`
  text-align : start;
`
export const MypickDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 6px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  }

  textarea {
    width: 94%;
    height: 80px;
    padding: 8px;
    resize: none;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #4a8bff;
    }
  }

  button {
    align-self: flex-end; 
  }
`

export const MovieDetail = styled.div`
  align-self: center;
  width: 100%;
`
export const ButtonFlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  & ${ButtonStyle} {
    margin: 4px;
  }
`

export const ModalContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  width: 50vw;
  height: fit-content;
  border-radius: 20px;
  position: absolute;
  z-index: 100;

  & img {
    width: 200px;
  }

  & ${ButtonStyle} {
    width: 100px;
    color:white;
  }
`