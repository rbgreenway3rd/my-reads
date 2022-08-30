import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <button
        className="search__button hidden__button"
        disabled
        type="hidden"
        style={{
          background: "transparent",
          border: "none",
        }}
      >
        <i className="fa-solid fa-circle-plus fa-4x hidden__button" />
      </button>
      <h1 className="header__title">MyReads</h1>
      <div
        className="tooltip"
        data-toggle="tooltip"
        title="Add More Books"
        id="tooltip__text"
      >
        <button className="search__button">
          <Link className="search__link" to="/search">
            <i className="fa-solid fa-circle-plus fa-4x search__button" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
