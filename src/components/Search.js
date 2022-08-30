import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../data/BooksAPI";
import "./Search.css";
import "./Book.css";

// Copied from Udacity Starter Code
class Search extends React.Component {
  static propTypes = {
    bookArray: PropTypes.array.isRequired,
    updateBookArray: PropTypes.func.isRequired,
    shelfList: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      searchError: false,
      userQuery: "",
      queriedBooks: [],
    };
  }

  searchBooks = (event) => {
    const userQuery = event.target.value;
    this.setState({ userQuery });
    // if app detects user input, begin running query
    if (userQuery.length > 0) {
      BooksAPI.search(userQuery).then((bookArray) => {
        bookArray.length > 0
          ? this.setState({ queriedBooks: bookArray, searchError: false })
          : this.setState({ queriedBooks: [], searchError: true });
      });

      // empty out "userQuery" state to end search
    } else this.setState({ queriedBooks: [], searchError: false });
  };

  render() {
    const { userQuery, queriedBooks, searchError } = this.state;
    const { bookArray, changeShelf, updateBookArray } = this.props;

    return (
      <div className="container">
        <div className="search__bar">
          <div
            className="tooltip"
            data-toggle="tooltip"
            title="Back To Shelves"
            id="tooltip__text"
          >
            <Link className="close__search" to="/">
              <i className="fa-solid fa-arrow-left fa-3x" />
            </Link>
          </div>
          <div className="search__input__container">
            <input
              className="search__input"
              type="text"
              placeholder="Search by title or author..."
              value={userQuery}
              onChange={this.searchBooks}
            />
          </div>
          <div className="close__search fa-2x hidden__close__search" disabled>
            <i className="fa-solid fa-arrow-left fa-3x" />
          </div>
        </div>
        <div>
          {queriedBooks.length > 0 && (
            <div className="search__results">
              <h3 className="search__results__header">
                MyReads has found {queriedBooks.length} books that match your
                query:
              </h3>
              <ol className="books">
                {queriedBooks.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    changeShelf={changeShelf}
                    bookArray={bookArray}
                  />
                ))}
              </ol>
            </div>
          )}
          {searchError && (
            <h3>
              Sorry! MyReads can't find any books that match your search...
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
