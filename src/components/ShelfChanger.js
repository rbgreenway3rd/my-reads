import React from "react";
import PropTypes from "prop-types";

class ShelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookArray: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book,
      currentShelf: this.props.book.shelf,
    };
  }

  onChangeShelf = (event) =>
    this.props.changeShelf(this.props.book, event.target.value);

  render() {
    const { book } = this.props;
    const books = this.props.bookArray;
    let { currentShelf } = this.props;

    // Using a "for... of" loop to return the values from the key-value pairs
    // Note: a "for... in" loop would return the keys from the key-value pairs
    for (let b of books) {
      // check if book is already in current list; break if so
      if (b.id === book.id) {
        currentShelf = b.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.onChangeShelf} defaultValue={currentShelf}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Finished Reading</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;