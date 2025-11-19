import { useTheme } from "../context/ThemeContext"
import styled from 'styled-components'

const ToggleStyle = styled.div`
  background-color: ${({theme}) => theme.buttonBg};
` 

const ThemeToggle = () => {
    const { toggleTheme } = useTheme();
    return (
        <ToggleStyle onClick={toggleTheme}>ThemeToggle</ToggleStyle>
    )
}

export default ThemeToggle