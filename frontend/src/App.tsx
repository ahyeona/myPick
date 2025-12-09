import './App.css'
import Router from './router';
import { useTheme } from './context/ThemeContext'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useAuthStore } from './store/authStore';
import { useEffect } from 'react';
import { profileApi, refreshApi } from './services/authApi';

const App = () => {
  const { themeName } = useTheme();

  const getToken = async () => {
    try {
      const { data } = await refreshApi();
      useAuthStore.getState().setAccessToken(data.accessToken);

      const user = await profileApi();
      useAuthStore.getState().setUser(user.data.user);

      console.log("app.tsx")
    } catch (err) {
      console.log("자동 로그인 실패");
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App