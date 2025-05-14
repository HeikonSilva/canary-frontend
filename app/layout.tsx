import { Outlet } from 'react-router'

import Pagination from './components/Pagination'
import InnerPagination from './components/InnerPagination'

export default function Layout() {
  return (
    <div className="flex flex-row h-full w-full">
      <Pagination />
      <InnerPagination />
      <Outlet />
    </div>
  )
}
