import React from "react";
import SearchIcon from "../assets/icon/SearchButton";

export default function InputField() {
  return (
    <div className="input__field">
      <SearchIcon />
      <input
        className="input"
        type="search"
        placeholder="Search for photo"
        name="Search for photo"
        id="search-for-photo"
      />
    </div>
  );
}
