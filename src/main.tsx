import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './global.css'
import Layout from './components/layout'
import Home from './pages/Home'
import Servers from './pages/Servers'
import Landing from './pages/Landing'
import AuthLayout from './components/authLayout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassord from './pages/ForgotPassword'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route element={<AuthLayout />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="forgotpassword" element={<ForgotPassord />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="servers" element={<Servers />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
