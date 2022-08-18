import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../data/BooksAPI";

// Copied from Udacity Starter Code
class Search extends React.Component {
  static propTypes = {
    bookArray: PropTypes.array.isRequired,
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

    if (userQuery.length > 0) {
      // remove spaces from userQuery
      BooksAPI.search(userQuery.replace(" ", ""), 20).then((bookArray) => {
        bookArray.length > 0
          ? this.setState({ queriedBooks: bookArray, searchError: false })
          : this.setState({ queriedBooks: [], searchError: true });
      });

      // if userQuery is empty => reset state to default
    } else this.setState({ queriedBooks: [], searchError: false });
  };

  render() {
    const { userQuery, queriedBooks, searchError } = this.state;
    const { bookArray, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={userQuery}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {queriedBooks.length > 0 && (
            <div>
              <h3>Search returned {queriedBooks.length} books </h3>
              <ol className="books-grid">
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
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
