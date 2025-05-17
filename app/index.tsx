import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './global.css'
import Layout from './layout'
import Home from './Home'
import Conversation from './Conversation'
import Landing from './Landing'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="conversations" element={<Conversation />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
