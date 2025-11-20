import './App.css'
import { useTheme } from './context/ThemeContext'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import Router from './router';

const App = () => {
  const { themeName } = useTheme();

  return (
    <>
        <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
          <Router />
          {/* <div>App</div>
          <Button text='test' />
          <ThemeToggle />
          <Nav>
            <SearchBar onChange={()=>{}}/>
          </Nav>
          <Input placeholder='Email' />
          <Input placeholder='Password' /> */}
        </ThemeProvider>
    </>
  )
}

export default App