import React from "react";
import * as BooksAPI from "../data/BooksAPI";
import PropTypes from "prop-types";
import "./Book.css";

const propTypes = {
  book: PropTypes.object,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  publishedDate: PropTypes.string,
  description: PropTypes.string,
  imageLinks: PropTypes.string.isRequired,
  shelf: PropTypes.string,
  handleChangeBookShelf: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

/**
 * This object sets default values to the optional props.
 */
const defaultProps = {
  title: null,
};

const Book = (props) => {
  // const handleChange = (event) => {
  //     event.preventDefault();

  //     handleChangeBookShelf()
  //   }
  // };

  // NOTE
  // Assign 'bookImage' variable to one of two URLs contained within the 'imageLinks' prop of 'book' object
  // If no URL is provided/available, a "" will be used to return a blank image
  // NOTE
  let bookImage = props.book.imageLinks ? props.book.imageLinks.thumbnail : "";

  return (
    <div className="book" book={props.book} id={props.book.id}>
      <div className="book__image__container">
        <img className="book__image" src={bookImage} />
      </div>
      <div className="book__title">{props.book.title}</div>
      <div className="book__authors">{props.book.authors}</div>
      <div className="book-shelf-changer">
        <select defaultValue={props.book.shelf}>
          {/* <option
            onSelect={props.handleChangeBookShelf(props.book, this.target.value)}
            value="move"
          >
            Move to...
          </option> */}
          <option
            onSelect={props.handleChangeBookShelf()}
            value="currentlyReading"
          >
            Currently Reading
          </option>
          <option onSelect={props.handleChangeBookShelf()} value="wantToRead">
            Want to Read
          </option>
          <option onSelect={props.handleChangeBookShelf()} value="read">
            Read
          </option>
          <option onSelect={props.handleChangeBookShelf()} value="none">
            None
          </option>
        </select>
      </div>
    </div>
  );
};

// Type checking the props of the component
Book.propTypes = propTypes;
// Assign default values to the optional props
Book.defaultProps = defaultProps;

// class Book extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bookTitle: "",
//       bookLink: "none",
//       bookImage: this.props.imageLinks ? this.props.imageLinks.thumbnail : "",
//     };
//     this.handleChangeBookShelf = this.handleChangeBookShelf.bind(this);
//   }

//   changeBookShelf(book, targetShelf) {
//     BooksAPI.update(book, targetShelf);
//     // convert to seperate function later:
//     let onTargetShelf = false;
//     if (this.state.bookArray.length > 0) {
//       const targetBook = this.state.bookArray.filter(
//         (target) => book.shelf === target.shelf
//       );
//       if (targetBook.length > 0) {
//         onTargetShelf = true;
//       } else {
//         onTargetShelf = false;
//       }
//     }
//     const newBooks = this.state.bookArray.slice();
//     if (onTargetShelf === false) {
//       newBooks.push(book);
//     }
//     this.setState({ bookArray: newBooks });

//     this.setState((props) => {
//       const updatedShelves = props.bookArray.map((newBook) => {
//         newBook.shelf = newBook.id === book.id ? targetShelf : newBook.shelf;
//         return newBook;
//       });
//       return { bookArray: updatedShelves };
//     });
//   }

//   handleChangeBookShelf = (event) => {
//     this.state.changeBookShelf(this.props.book, event.target.value);
//   };

//   // NOTE
//   // Assign 'bookImage' variable to one of two URLs contained within the 'imageLinks' prop of 'book' object
//   // If no URL is provided/available, a "" will be used to return a blank image
//   // NOTE

//   render() {
//     const bookImage = this.props.imageLinks
//       ? this.props.imageLinks.thumbnail
//       : "";

//     return (
//       <div className="book">
//         <div className="book__image__container">
//           <img className="book__image" src={bookImage} />
//         </div>
//         <div className="book__title">{this.props.title}</div>
//         <div className="book__authors">{this.props.authors}</div>
//         <div className="book-shelf-changer">
//           <select
//             onChange={this.props.handleChangeBookShelf}
//             defaultValue={this.props.shelf}
//           >
//             <option value="move">Move to...</option>
//             <option value="currentlyReading">Currently Reading</option>
//             <option value="wantToRead">Want to Read</option>
//             <option value="read">Read</option>
//             <option value="none">None</option>
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

export default Book;
