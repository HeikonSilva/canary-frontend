import { User } from 'lucide-react'
import { NavLink } from 'react-router'

export default function ChatsButton() {
  return (
    <NavLink to={'/conversations'}>
      <button className="hover:bg-cyan-100 cursor-pointer px-4 flex w-full gap-4 py-2 items-center rounded-2xl">
        <div className="bg-white p-2 rounded-full">
          <User />
        </div>
        <div className="flex flex-col text-start">
          <h1>Usuário</h1>
          <p className="text-sm">mensagem</p>
        </div>
      </button>
    </NavLink>
  )
}
