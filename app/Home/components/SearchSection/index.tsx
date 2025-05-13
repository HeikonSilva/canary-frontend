import SearchFilterButtons from '../SearchFilterButton'

export default function SearchSection() {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-white w-full h-10 rounded-full"
        placeholder="Pesquisar ou começar uma nova conversa"
        type="text"
      />
      <div>
        <SearchFilterButtons />
      </div>
    </div>
  )
}
