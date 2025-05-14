import Header from './components/Header'
import SearchSection from './components/SearchSection'
import ChatsList from './components/ChatsList'

export default function InnerPagination() {
  return (
    <div className="flex flex-row">
      <div className="bg-cyan-400 gap-4 w-100 p-4 flex flex-col">
        <Header />
        <SearchSection />
        <ChatsList />
      </div>
    </div>
  )
}
