import Header from './components/Header'
import SearchSection from './components/SearchSection'
import ChatsList from './components/ChatsList'

export default function Home() {
  return (
    <div className="bg-amber-400 gap-4 w-100 p-4 flex flex-col">
      <Header />
      <SearchSection />
      <ChatsList />
    </div>
  )
}
