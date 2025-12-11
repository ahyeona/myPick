import styled from 'styled-components'

export const NavStyle = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.navBg};

  & p {
    color: ${({ theme }) => theme.buttonText};
  }
`