import { useLibraryStore } from "../stores/libraryStore"
import { Filter } from "./Filter"
import { ToReadIcon } from "./ToReadIcon"

export const Header = () => {
    const { books, toRead, maxPages, minPages,openToRead } = useLibraryStore()

    return(
        <header className="flex flex-row justify-between mb-6 bg-header w-screen">
            <div className="flex flex-col items-start">
                <h2>{books.length} libros disponibles</h2>
                <h4>{toRead.length} en la lista de lectura</h4>
                <Filter max={maxPages} min={minPages}/>
            </div>
            <div className="flex">
                <button className="hover:scale-110 transition-all"  onClick={openToRead}><ToReadIcon /></button>
            </div>
        </header>
    )
}   