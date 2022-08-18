import React from "react";
import { Fragment } from "react";
import * as BooksAPI from "./data/BooksAPI";
import BookShelf from "./components/BookShelf";
import ShelfList from "./components/ShelfList";
import Book from "./components/Book";
import "./MyReadsApp.css";
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
        { key: "read", value: "Read" },
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
  };

  changeShelf = async (targetBook, newShelf) => {
    const data = await BooksAPI.update(targetBook, newShelf);
    this.setState(() => ({
      bookArray: data,
    })).then(this.updateBookArray());
  };

  componentDidMount() {
    this.updateBookArray();
  }

  render() {
    const { bookArray, shelfList } = this.state;
    return (
      <Fragment>
        <ShelfList
          bookArray={bookArray}
          shelfList={shelfList}
          changeShelf={this.changeShelf}
        />
      </Fragment>
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
//                   <Book
//                     // pass props to child
//                     book={book}
//                     key={book.id}
//                   />
//                 ))}
//             </div>
//             <div className="shelf__list__wantToRead">
//               <h3>Want To Read</h3>
//               {this.state.bookArray
//                 .filter((book) => book.shelf === "wantToRead")
//                 .map((book) => (
//                   <Book
//                     book={book}
//                     key={book.id}
//                     changeShelf={(targetBook, newShelf) => {
//                       this.changeShelf(targetBook, newShelf);
//                     }}
//                   />
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
//           </div>
//         </Fragment>
//       </div>
//     );
//   }
// }

export default MyReadsApp;
