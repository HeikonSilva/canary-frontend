import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './global.css'
import Layout from './layout'
import InnerPagination from './components/InnerPagination'
import Home from './Home'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route element={<InnerPagination />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
