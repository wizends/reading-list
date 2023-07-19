import { create } from 'zustand'
import { library } from '../books.json'
import { GenreType, IBook } from '../types.d'
import { persist, createJSONStorage } from 'zustand/middleware'

type LibraryState = {
    books: typeof library   
    toRead: typeof library | []
    filteredBooks: typeof library
    maxPages: number
    minPages: number
    toReadOpen: boolean
    genres: string[]
    closeToRead: () => void
    openToRead: () => void
    addToRead: (book : IBook) => void
    removeToRead: (book: IBook) => void
    filterByPages: (pages: number) => void
    filterByGenre: (genre: GenreType) => void
}

const originalLibrary = library
const pages = originalLibrary.map(({book}) => (book.pages))
const allGenre = new Set(library.map(({book}) => book.genre))
const genres = Array.from(allGenre)


export const useLibraryStore = create<LibraryState>()(
    persist((set)  => ({
        books: originalLibrary,
        minPages: Math.min(...pages),
        maxPages: Math.max(...pages),
        toRead: [],
        filteredBooks: originalLibrary,
        toReadOpen: false,
        genres: genres,
        closeToRead: () => set(() => ({toReadOpen: false})),
        openToRead: () => set(() => ({toReadOpen: true})),
        addToRead: (bookToRead) => 
            set(state => ({
                toRead:[...state.toRead, bookToRead], 
                books: state.books.filter(({book}) => (book.ISBN !== bookToRead.book.ISBN)),
                filteredBooks: state.books.filter(({book}) => (book.ISBN !== bookToRead.book.ISBN))
            })),
        removeToRead: (bookToRemove) => 
            set(state => ({
                books: [...state.books, bookToRemove], 
                toRead: state.toRead.filter(({book}) => (book.ISBN !== bookToRemove.book.ISBN)),
                filteredBooks: [...state.filteredBooks, bookToRemove]
            })), 
        filterByPages: (pages) => set((state) => ({books: state.filteredBooks.filter(({book})=> (book.pages <= pages))})),
        filterByGenre: (genre) => set((state) => ({books:  state.filteredBooks.filter(({book}) => (book.genre === genre || genre === GenreType.Todas)) }))
    }),
    {
        name: 'library-storage', 
        storage: createJSONStorage(() => localStorage), 
      }
))
