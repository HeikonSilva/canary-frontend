import { Outlet } from 'react-router'

import Pagination from './components/Pagination'

export default function Layout() {
  return (
    <div className="flex flex-row h-full w-full">
      <Pagination />
      <Outlet />
    </div>
  )
}
