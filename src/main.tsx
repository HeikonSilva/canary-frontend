import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/layout'
import Home from './pages/Home'
import Servers from './pages/Servers'
import Landing from './pages/Landing'
import AuthLayout from './components/authLayout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassord from './pages/ForgotPassword'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassord />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="servers" element={<Servers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
