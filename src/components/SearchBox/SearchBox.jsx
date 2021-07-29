import React from "react";

//css file
import "./SearchBox.css";
const SearchBox = (props) => {
  return (
    <div className="search-container">
      <input
        type="text"
        onChange={(event) => props.onInputChange(event.target.value)}
        placeholder="Type a Keyword"
        className="search-input"
      />
    </div>
  );
};
export default SearchBox;
