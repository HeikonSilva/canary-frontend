import { Outlet, NavLink } from 'react-router'
import {
  MessageSquareText,
  CircleDotDashed,
  MessageCircleMore,
  UsersRound,
  Settings,
} from 'lucide-react'

export default function Layout() {
  return (
    <div className="flex flex-row h-full w-full">
      <nav className="flex flex-col gap-4 p-4 w-24 h-screen bg-amber-200">
        <NavLink to={'#'}>
          <MessageSquareText />
        </NavLink>
        <NavLink to={'#'}>
          <CircleDotDashed />
        </NavLink>
        <NavLink to={'#'}>
          <MessageCircleMore />
        </NavLink>
        <NavLink to={'#'}>
          <UsersRound />
        </NavLink>
        <NavLink to={'#'}>
          <Settings />
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
