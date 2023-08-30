import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSearch(inputValue);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter topic..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="sumbit" id="searchButton">Search</button>
    </form>
  );
};

export default Search;
