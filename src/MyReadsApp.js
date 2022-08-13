import React from "react";
import { Fragment } from "react";
import * as BooksAPI from "./data/BooksAPI";
import Book from "./components/Book";
// import { ShelfList } from "./components/BookShelves/ShelfList";
import "./MyReadsApp.css";

// BOOK KEYS:
// title, authors, publishedDate, description, industryIdentifiers, readingModes,
// pageCount, printType, maturityRating, allowAnonLogging, contentVersion,
// panelizationSummary, imageLinks, language, previewLink, infoLink, canonicalVolumeLink, id, shelf
class MyReadsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArray: [],
      currentlyReadingArray: [],
      wantToReadArray: [],
      finishedReadingArray: [],
    };
  }

  updateBookArray() {
    BooksAPI.getAll().then((data) => {
      console.log("updateBookArray", data);
      this.setState({ bookArray: data });
    });
  }

  componentDidMount() {
    this.updateBookArray();
  }

  render() {
    return (
      <Fragment>
        <h2 className="shelf__list__header">MyReads</h2>
        <div className="shelf__list__container">
          <div className="shelf__list__currentlyReading">
            <h3>Currently Reading</h3>
            {this.state.bookArray
              .filter((book) => book.shelf === "currentlyReading")
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
          <div className="shelf__list__wantToRead">
            <h3>Want To Read</h3>
            {this.state.bookArray
              .filter((book) => book.shelf === "wantToRead")
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
          <div className="shelf__list__finishedReading">
            <h3>Finished Reading</h3>
            {this.state.bookArray
              .filter((book) => book.shelf === "read")
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default MyReadsApp;
