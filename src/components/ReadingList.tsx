import { useLibraryStore } from "../stores/libraryStore"
import { BooksType } from "../types.d"
import { Book } from "./Book"

export const ReadingList = () => {
    const { toRead, closeToRead } = useLibraryStore()
    return(
        <section className="fixed right-0 top-0 w-2/5 bg-slate-700 h-screen overflow-scroll overflow-x-hidden">
            <ul className="grid grid-cols-auto gap-7 justify-center">
                {toRead.map(({book}) => (<Book key={book.ISBN} book={{book}} typeOfBook={BooksType.ToRead}/>))}
            </ul>
            <button onClick={closeToRead}>close</button>
        </section>
    )
}