import { EllipsisVertical, MessageSquarePlus } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex gap-4 flex-row justify-between">
      <h1 className="font-bold text-white text-xl">canary</h1>
      <div className="space-x-4">
        <button>
          <div className="hover:bg-cyan-50 p-2 cursor-pointer rounded-full aspect-square">
            <MessageSquarePlus />
          </div>
        </button>
        <button>
          <div className="hover:bg-cyan-50 p-2 cursor-pointer rounded-full aspect-square">
            <EllipsisVertical />
          </div>
        </button>
      </div>
    </div>
  )
}
