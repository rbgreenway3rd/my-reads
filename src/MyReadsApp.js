import React from "react";
import * as BooksAPI from "./data/BooksAPI";
import Book from "./components/Book";
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
      <div className="app">
        <ul className="books">
          {this.state.bookArray.map((book) => (
            <li className="book" key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyReadsApp;
