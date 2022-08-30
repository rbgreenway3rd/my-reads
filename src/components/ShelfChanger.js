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
    let shelf = "none";
    // Using a "for... of" loop to return the values from the key-value pairs
    // Note: a "for... in" loop would return the keys from the key-value pairs
    for (let b of books) {
      // check if book is already in current list; break if so
      if (b.id === book.id) {
        shelf = b.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <div
          className="tooltip"
          data-toggle="tooltip"
          title="Move Book To Different Shelf"
          id="tooltip__text"
        >
          <select onChange={this.onChangeShelf} defaultValue={shelf}>
            <option value="none" disabled>
              None
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Finished Reading</option>
            <option value="remove">Remove</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ShelfChanger;
