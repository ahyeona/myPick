import styled from 'styled-components'
import { ButtonStyle } from '../Button/Button.style';

export const SearchWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  position: relative;
  width: fit-content;

  & ${ButtonStyle} {
    position: absolute;
    font-size: 12px;
    right: 12px;
    top: 50%;
    translate: 0 -50%;
    background-color: transparent;
  }
`;


export const SearchBarStyle = styled.input`
  width: 80vw;
  max-width: 500px;
  padding: 10px 14px;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};

  font-size: 15px;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.inputFocusBg};
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px
      ${({ theme }) => theme.primaryShadow};
  }
`;