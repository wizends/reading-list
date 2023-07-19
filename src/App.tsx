import './App.css'
import { Library } from './components/Library'
import { Header } from './components/Header'
import { ReadingList } from './components/ReadingList'
import { useLibraryStore } from './stores/libraryStore'

function App() {
  const {toReadOpen} = useLibraryStore()

  return (
    <main>
      <Header />
      <Library />
      {toReadOpen ? <ReadingList /> : ''}
    </main>
  )
}

export default App
