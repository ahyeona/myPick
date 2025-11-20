import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Main, Mypick, Signup } from '../pages';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/mypick' element={<Mypick />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router