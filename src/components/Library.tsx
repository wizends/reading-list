import { useLibraryStore } from "../stores/libraryStore";
import { BooksType } from "../types.d";
import { Book } from "./Book";

export const Library = () => {
  const { books } = useLibraryStore();

  return (
    <section>
      <ul className="grid grid-cols-auto justify-between gap-7">
        {books.map(({ book }) => (
          <Book key={book.ISBN} book={{book}} typeOfBook={BooksType.Library}/>
        ))}
      </ul>
    </section>
  );
};
