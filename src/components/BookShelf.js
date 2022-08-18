import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  render() {
    const { books, changeShelf } = this.props;

    return (
      <ol className="shelf__book">
        {books.map((book) => (
          <Book key={book.id} book={book} changeShelf={changeShelf} />
        ))}
      </ol>
    );
  }
}

export default BookShelf;
