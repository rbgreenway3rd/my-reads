import React from "react";
import { Book } from "./Book";

const BookShelf = ({ books, title }) => (
  <div className="shelf__container">
    <h2>{title}</h2>
    <div className="shelf__book">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  </div>
);

export default BookShelf;
