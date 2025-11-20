import styled from 'styled-components'

const LogoStyle = styled.div`
  height: 3rem;
  color: ${({theme}) => theme.textPrimary};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

const Logo = () => {
    const onClick = () => {
        
    }

    return (
        <LogoStyle onClick={onClick}>MyPick</LogoStyle>
    )
}

export default Logo