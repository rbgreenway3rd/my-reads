import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>MyReads</h1>
      <div className="search__link">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

export default Header;
