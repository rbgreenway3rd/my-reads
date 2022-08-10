import React from "react";
import "./Book.css";

const Book = (props) => {
  // Assign 'bookImage' variable to one of two URLs contained within the 'imageLinks' prop of 'book' object
  // If no URL is provided/available, a "" will be used to return a blank image
  let bookImage = props.book.imageLinks ? props.book.imageLinks.thumbnail : "";

  return (
    <div className="book">
      <div className="book__image__container">
        <img className="book__image" src={bookImage} />
      </div>
      <div className="book__title">{props.book.title}</div>
      <div className="book__authors">{props.book.authors}</div>
    </div>
  );
};

//   backgroundPosition: "center",
//   backgroundImage: `url("${bookImage}")`,
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",

export default Book;
