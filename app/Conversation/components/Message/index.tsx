export default function Message() {
  return (
    <div className="flex flex-row gap-4">
      <div className="bg-white w-8 h-8 rounded-full"></div>
      <div className="bg-cyan-500 p-2 rounded-t-2xl rounded-r-2xl">
        <h1>Nome</h1>
        <p>Mensagem</p>
      </div>
    </div>
  )
}
