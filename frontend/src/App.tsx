import './App.css'
import { useTheme } from './context/ThemeContext'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import Router from './router';
import { Button, Nav, SearchBar, ThemeToggle } from './components';
import { useAuthStore } from './store/authStore';

const App = () => {
  const { themeName } = useTheme();
  const { user } = useAuthStore.getState();

  return (
    <>
        <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
          <Nav>
            <SearchBar onChange={()=>{}}/>
            <ThemeToggle />
            <Button text='login' />
          </Nav>
          <div>{user?.email}</div>
          <Router />

        </ThemeProvider>
    </>
  )
}

export default App