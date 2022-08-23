import React from "react";
import BookShelf from "./BookShelf";

const ShelfList = (props) => {
  const { bookArray, shelfList, changeShelf } = props;

  return (
    <div className="bookShelves">
      {shelfList.map((shelf) => {
        const shelfBooks = bookArray.filter((book) => book.shelf === shelf.key);
        return (
          <div className="bookShelf" key={shelf.key} value={shelf.value}>
            <h2 className="bookShelf__title">{shelf.value}</h2>
            <div className="bookShelf__books">
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
