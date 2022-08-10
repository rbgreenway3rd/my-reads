import React from "react";
import * as BooksAPI from "data/BooksAPI";
import { Route } from "react-router-dom";
import ShelfList from "./components/BookShelves/ShelfList";
import "./MyReadsApp.css";

const getBooks = () =>
  BooksAPI.getAll().then((books) => this.setState({ books }));

const moveBook = (book, shelf) =>
  BooksAPI.update(book, shelf).then((books) => this.getBooks());

function MyReadsApp() {
  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <ShelfList
            books={this.state.books}
            changeBookShelf={(book, shelf) => this.changeBookShelf(book, shelf)}
          />
        )}
      />
      {/* <Route
        exact
        path="/search"
        render={() => (

        )}
      /> */}
    </div>
  );
}

export default MyReadsApp;
