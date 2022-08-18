import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

class Book extends React.Component {
  static propTypes = {
    bookArray: PropTypes.array,
    book: PropTypes.object,
    changeShelf: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book,
      title: this.props.book.title,
      authors: this.props.book.authors,
      imageLinks: this.props.book.imageLinks,
      shelf: this.props.book.shelf,
    };
    this.handleChangeShelf = this.handleChangeShelf.bind(this);
  }

  handleChangeShelf(event) {
    this.props.changeShelf(this.props.book, event.target.value);
  }

  render() {
    const { bookArray, book, changeShelf } = this.props;
    let bookImage = book.imageLinks ? book.imageLinks.thumbnail : "";

    return (
      <div className="book" book={book} id={book.id}>
        <div className="book__image__container">
          <img className="book__image" src={bookImage} />
        </div>
        <div className="book__title">{book.title}</div>
        <div className="book__authors">{book.authors}</div>
        <ShelfChanger
          book={book}
          bookArray={bookArray}
          changeShelf={changeShelf}
        />
      </div>
    );
  }
}

export default Book;
