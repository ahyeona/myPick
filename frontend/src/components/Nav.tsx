import type { ReactNode } from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const NavStyle = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.navBg};
`

const Nav = ({children} : {children : ReactNode}) => {
  return (
    <NavStyle>
      <Logo />
      {children}
    </NavStyle>
  )
}

export default Nav