import { Outlet } from 'react-router'

import Pagination from './components/Pagination'
import InnerPagination from './components/InnerPagination'
import { Phone, Video } from 'lucide-react'

export default function Layout() {
  return (
    <div className="flex flex-row h-full w-full">
      <Pagination />
      <InnerPagination />
      <div className="bg-cyan-50 h-screen w-full">
        <div className="flex flex-row justify-between items-center h-16 p-4 bg-cyan-200">
          <div className="flex flex-row gap-4 items-center">
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <h1 className="text-xl">Name</h1>
          </div>
          <div className="flex gap-4">
            <div className="hover:bg-white cursor-pointer p-1 w-8 h-8 rounded-full">
              <Video />
            </div>
            <div className="hover:bg-white cursor-pointer p-1 w-8 h-8 rounded-full">
              <Phone />
            </div>
          </div>
        </div>
        <div className="p-4 bg-cyan-700 h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
