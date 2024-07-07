import React from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="simple-search-form">
      <input
        type="text"
        placeholder="Search..."
        className="simple-search-input"
      />
      <button type="submit" className="simple-search-btn">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
