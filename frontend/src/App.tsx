import './App.css'
import { useTheme } from './context/ThemeContext'
import { Button, ThemeToggle } from './components';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';


const App = () => {
  const { themeName } = useTheme();

  return (
    <>
        <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
          <div>App</div>
          <Button />
          <ThemeToggle />
        </ThemeProvider>
    </>
  )
}

export default App