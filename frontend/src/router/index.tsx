import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Main, Mypick, Signup } from '../pages';
import AuthRoute from './AuthRoute';
import { Nav } from '../components';
import { useAuthStore } from '../store/authStore';


const Router = () => {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Nav />
      {user?.email}
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/mypick' element={<AuthRoute><Mypick /></AuthRoute>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router