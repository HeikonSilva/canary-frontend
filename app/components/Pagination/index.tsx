import {
  MessageSquareText,
  CircleDotDashed,
  MessageCircleMore,
  UsersRound,
  Settings,
} from 'lucide-react'
import { NavLink } from 'react-router'

export default function Pagination() {
  return (
    <div>
      <nav className="flex flex-col gap-4 p-4 w-16 h-screen bg-cyan-200">
        <NavLink to={'#'}>
          <div className="hover:bg-cyan-50 p-1 rounded-full aspect-square">
            <MessageSquareText />
          </div>
        </NavLink>
        <NavLink to={'#'}>
          <div className="hover:bg-cyan-50 p-1 rounded-full aspect-square">
            <CircleDotDashed />
          </div>
        </NavLink>
        <NavLink to={'#'}>
          <div className="hover:bg-cyan-50 p-1 rounded-full aspect-square">
            <MessageCircleMore />
          </div>
        </NavLink>
        <NavLink to={'#'}>
          <div className="hover:bg-cyan-50 p-1 rounded-full aspect-square">
            <UsersRound />
          </div>
        </NavLink>
        <NavLink to={'#'}>
          <div className="hover:bg-cyan-50 p-1 rounded-full aspect-square">
            <Settings />
          </div>
        </NavLink>
      </nav>
    </div>
  )
}
