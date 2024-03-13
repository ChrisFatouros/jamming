import React, { useState } from 'react';
import './search.css'


function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search for songs ..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button className='searchbutton' type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
