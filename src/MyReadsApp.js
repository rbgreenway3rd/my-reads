import React from "react";
import * as BooksAPI from "./data/BooksAPI";
import Header from "./components/Header";
import ShelfList from "./components/ShelfList";
import "./MyReadsApp.css";
import Search from "./components/Search";
import { Route, Routes, Navigate } from "react-router-dom";

class MyReadsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArray: [],
      currentlyReadingArray: [],
      wantToReadArray: [],
      finishedReadingArray: [],
      shelfList: [
        { key: "currentlyReading", value: "Currently Reading" },
        { key: "wantToRead", value: "Want to Read" },
        { key: "read", value: "Finished Reading" },
      ],
    };
  }

  updateBookArray = async () => {
    const data = await BooksAPI.getAll();
    const currentReads = data.filter(
      (currentRead) => currentRead.shelf === "currentlyReading"
    );
    const wantToReads = data.filter(
      (wantToRead) => wantToRead.shelf === "wantToRead"
    );
    const finishedReads = data.filter(
      (finishedRead) => finishedRead.shelf === "read"
    );
    this.setState(() => ({
      bookArray: data,
      currentlyReadingArray: currentReads,
      wantToReadArray: wantToReads,
      finishedReadingArray: finishedReads,
    }));

    console.log("updateBookArray", data);
    console.log("current", currentReads);
    console.log("want", wantToReads);
    console.log("finished", finishedReads);
    console.log(window.location.pathname);
  };

  changeShelf = (targetBook, newShelf) => {
    BooksAPI.update(targetBook, newShelf)
      .then(() => {
        targetBook.shelf = newShelf;
        this.setState((prev) => ({
          bookArray: prev.bookArray
            .filter((updatedBook) => updatedBook.id !== targetBook.id)
            .concat(targetBook),
        }));
      })
      .then(() => {
        this.updateBookArray();
      })
      .then(() => {
        return <Navigate to="/" />;
      });
  };

  componentDidMount() {
    this.updateBookArray();
  }

  render() {
    const { bookArray, shelfList } = this.state;
    return (
      <div className="app">
        <Routes>
          <Route
            path="/search"
            element={
              <Search
                bookArray={bookArray}
                shelfList={shelfList}
                changeShelf={this.changeShelf}
                updateBookArray={this.updateBookArray}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <div className="home">
                <Header className="header" />
                <ShelfList
                  className="shelfList"
                  bookArray={bookArray}
                  shelfList={shelfList}
                  changeShelf={this.changeShelf}
                />
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default MyReadsApp;
