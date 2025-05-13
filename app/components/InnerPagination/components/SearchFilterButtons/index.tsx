export default function SearchFilterButtons() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex gap-2 flex-row">
        <button className="hover:bg-cyan-50 bg-cyan-200 p-2 rounded-2xl">
          Tudo
        </button>
      </div>
      <div className="flex gap-2 flex-row">
        <button className="hover:bg-cyan-50 bg-cyan-200 p-2 rounded-2xl">
          Não Lidas
        </button>
      </div>
      <div className="flex gap-2 flex-row">
        <button className="hover:bg-cyan-50 bg-cyan-200 p-2 rounded-2xl">
          Favoritas
        </button>
      </div>
      <div className="flex gap-2 flex-row">
        <button className="hover:bg-cyan-50 bg-cyan-200 p-2 rounded-2xl">
          Grupos
        </button>
      </div>
    </div>
  )
}
