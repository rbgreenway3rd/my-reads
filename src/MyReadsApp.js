import React from "react";
import { Fragment } from "react";
import * as BooksAPI from "./data/BooksAPI";
import Book from "./components/Book";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
// import { ShelfList } from "./components/BookShelves/ShelfList";
import "./MyReadsApp.css";
import Search from "./components/Search";

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
    this.changeBookShelf = this.changeBookShelf.bind(this);
  }

  changeBookShelf = async (book, targetShelf) => {
    await BooksAPI.update(book, targetShelf);
    this.updateBookArray();
  };
  // changeBookShelf = (e) => {
  //   const newShelf = {
  //     book: this.props.book,
  //     shelf:
  //   }
  //   e.preventDefault();
  //   BooksAPI.update(book, targetShelf).then(
  //     this.updateBookArray()
  //   )
  // };

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
  };

  componentDidMount() {
    this.updateBookArray();
  }

  render() {
    return (
      <div className="app">
        <Fragment>
          <h2 className="shelf__list__header">MyReads</h2>
          <div className="shelf__list__container">
            <div className="shelf__list__currentlyReading">
              <h3>Currently Reading</h3>
              {this.state.bookArray
                .filter((book) => book.shelf === "currentlyReading")
                .map((book) => (
                  <Book
                    book={book}
                    key={book.id}
                    handleChangeBookShelf={this.changeBookShelf}
                  />
                ))}
            </div>
            <div className="shelf__list__wantToRead">
              <h3>Want To Read</h3>
              {this.state.bookArray
                .filter((book) => book.shelf === "wantToRead")
                .map((book) => (
                  <Book
                    book={book}
                    key={book.id}
                    handleChangeBookShelf={this.changeBookShelf}
                  />
                ))}
            </div>
            <div className="shelf__list__finishedReading">
              <h3>Finished Reading</h3>
              {this.state.bookArray
                .filter((book) => book.shelf === "read")
                .map((book) => (
                  <Book
                    book={book}
                    key={book.id}
                    handleChangeBookShelf={this.changeBookShelf}
                  />
                ))}
            </div>
            {/* <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div> */}
          </div>
        </Fragment>
      </div>
    );
  }
}
//   render() {
//     return (
//       <div className="app">
//         <Fragment>
//           <h2 className="shelf__list__header">MyReads</h2>
//           <div className="shelf__list__container">
//             <div className="shelf__list__currentlyReading">
//               <h3>Currently Reading</h3>
//               {this.state.bookArray
//                 .filter((book) => book.shelf === "currentlyReading")
//                 .map((book) => (
//                   <Book book={book} key={book.id} />
//                 ))}
//             </div>
//             <div className="shelf__list__wantToRead">
//               <h3>Want To Read</h3>
//               {this.state.bookArray
//                 .filter((book) => book.shelf === "wantToRead")
//                 .map((book) => (
//                   <Book book={book} key={book.id} />
//                 ))}
//             </div>
//             <div className="shelf__list__finishedReading">
//               <h3>Finished Reading</h3>
//               {this.state.bookArray
//                 .filter((book) => book.shelf === "read")
//                 .map((book) => (
//                   <Book book={book} key={book.id} />
//                 ))}
//             </div>
//             <div className="open-search">
//               <Link to="/search">Add a book</Link>
//             </div>
//           </div>
//         </Fragment>
//       </div>
//     );
//   }
// }
export default MyReadsApp;
