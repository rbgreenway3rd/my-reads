import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends React.Component {
  static propTypes = {
    bookArray: PropTypes.array.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  render() {
    const { shelfBooks, changeShelf, bookArray } = this.props;

    return (
      <ol className="shelf__book">
        {shelfBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            changeShelf={changeShelf}
            bookArray={bookArray}
          />
        ))}
      </ol>
    );
  }
}

export default BookShelf;
