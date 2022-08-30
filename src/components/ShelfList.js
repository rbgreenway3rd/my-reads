import React from "react";
import BookShelf from "./BookShelf";
import "./ShelfList.css";

const ShelfList = (props) => {
  const { bookArray, shelfList, changeShelf } = props;

  return (
    <div className="bookShelves">
      {shelfList.map((shelf) => {
        const shelfBooks = bookArray.filter((book) => book.shelf === shelf.key);
        return (
          <div className="shelf" key={shelf.key} value={shelf.value}>
            <h2 className="shelf__title">{shelf.value}</h2>
            <div className="shelf__books">
              <BookShelf
                shelfBooks={shelfBooks}
                changeShelf={changeShelf}
                bookArray={bookArray}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShelfList;
