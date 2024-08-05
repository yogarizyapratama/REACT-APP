import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode';

import Layout from './components/Layout'
import Home from './pages/Home'
import Members from './pages/Members'
import NotFound from './components/NotFound'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorPopup from './components/ErrorPopUp'
import GlobalLoading from './components/GlobalLoading'

import { useDispatch, useSelector } from 'react-redux';
import { setTokenExpired, logout, setUser } from './redux/slices/auth';
import { toast } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  
  useEffect(() => {
    const checkTokenExpiration = () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        dispatch(setUser(decodedToken))
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          dispatch(setTokenExpired());
          dispatch(logout());
          toast.error('Session has expired, please re-login!!!')
        }
      }
    };

    checkTokenExpiration();
  }, [token, dispatch]);

  return (
    <BrowserRouter>
     <GlobalLoading/>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>
        <Route path='/' element={<ProtectedRoute element={Layout}/>}>
          <Route index element={<Home/>}/>
          <Route path='members' element={<Members/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
