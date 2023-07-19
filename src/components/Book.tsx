import { useLibraryStore } from "../stores/libraryStore";
import { IBook, BooksType } from "../types.d";

type Props = {
  book: IBook;
  typeOfBook: BooksType;
};

export const Book = ({ book, typeOfBook }: Props) => {
  const { addToRead, removeToRead } = useLibraryStore();

  return (
    <li className="grid gap-1 justify-items-center" key={book.book.ISBN}>
      <a>
        <img className="object-cover" src={book.book.cover} />
      </a>
      {typeOfBook === BooksType.Library ? <button onClick={() => addToRead(book)}>Add to read</button> : <button onClick={() => removeToRead(book)}>remove</button>}
    </li>
  );
};
