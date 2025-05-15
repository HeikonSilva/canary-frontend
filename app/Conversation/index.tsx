import Message from './components/Message'

export default function Conversation() {
  return (
    <div className=" flex flex-col h-full w-full p-2 bg-cyan-600 rounded-2xl">
      <div className="flex flex-col gap-4 h-full overflow-y-scroll">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="w-full h-24 rounded-2xl bg-cyan-800">
        <input type="text" className="p-2 w-full h-full text-white" />
      </div>
    </div>
  )
}
