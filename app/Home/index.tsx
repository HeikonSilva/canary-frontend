import { EllipsisVertical, MessageSquarePlus } from 'lucide-react'
import { NavLink } from 'react-router'

export default function Home() {
  return (
    <div className="bg-amber-400 gap-4 w-100 p-4 flex flex-col">
      <div className="flex gap-4' flex-row">
        <h1 className="font-bold text-white text-3xl">Whatsapp</h1>
        <button>
          <MessageSquarePlus />
        </button>
        <button>
          <EllipsisVertical />
        </button>
      </div>
      <div className="flex flex-col">
        <input
          className="bg-white w-full h-10 rounded-full"
          placeholder="Pesquisar ou começar uma nova conversa"
          type="text"
        />
      </div>
      <NavLink to={'#'}>
        <button className="hover:bg-amber-50 w-full h-14 rounded-2xl">
          Conversation
        </button>
      </NavLink>
    </div>
  )
}
