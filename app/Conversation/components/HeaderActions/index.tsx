import { Phone, Video } from 'lucide-react'

export default function HeaderActions() {
  return (
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
  )
}
