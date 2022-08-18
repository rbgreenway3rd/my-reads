import React from "react";
import BookShelf from "./BookShelf";

const ShelfList = (props) => {
  const { bookArray, changeShelf, shelfList } = props;
  //   const shelfList = [
  //     { key: "currentlyReading", value: "Currently Reading" },
  //     { key: "wantToRead", value: "Want to Read" },
  //     { key: "read", value: "Read" },
  //   ];

  return (
    <div className="bookShelves">
      {shelfList.map((shelf) => {
        const shelfBooks = bookArray.filter((book) => book.shelf === shelf.key);
        return (
          <div className="bookshelf" key={shelf.key} value={shelf.value}>
            <h2 className="bookshelf__title">{shelf.value}</h2>
            <div className="bookshelf__books">
              <BookShelf books={shelfBooks} changeShelf={changeShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShelfList;
