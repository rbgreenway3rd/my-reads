import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import "./BookShelf.css";

class BookShelf extends React.Component {
  static propTypes = {
    bookArray: PropTypes.array.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  render() {
    const { shelfBooks, changeShelf, bookArray } = this.props;

    return (
      <ul className="books">
        {shelfBooks.map((book) => (
          <Book
            className="book"
            key={book.id}
            book={book}
            changeShelf={changeShelf}
            bookArray={bookArray}
          />
        ))}
      </ul>
    );
  }
}

export default BookShelf;
