import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalContainer = styled.div`
  background-color: #ffffff;
  width: 50vw;
  height: fit-content;
  border-radius: 20px;
  position: absolute;
  z-index: 100;

  & img {
    width: 200px;
    
  }
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`