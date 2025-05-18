import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './global.css'
import Layout from './layout'
import Home from './Home'
import Conversation from './Conversation'
import Landing from './Landing'
import AuthLayout from './authLayout'
import SignUp from './SignUp'
import SignIn from './SignIn'
import ForgotPassord from './ForgotPassword'

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
        <Route path="conversations" element={<Conversation />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
