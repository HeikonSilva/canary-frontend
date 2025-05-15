import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './global.css'
import Layout from './layout'
import Home from './Home'
import Conversation from './Conversation'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="conversations" element={<Conversation />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
