import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div >
      <form className="search-bar">
        <label className="search-word">
          Search:
        </label>
        <input className="input" type="text" name="name" />
      </form>
    </div>
  );
}
