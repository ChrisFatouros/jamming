// RootComponent.js
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import TrackList from './TrackList';

function RootComponent() {
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = (searchQuery) => {
    // Here you would perform your search logic, fetch data, etc.
    // For this example, I'll just update the search results state with dummy data.
    setSearchResults([
      { id: 1, title: 'Track 1', artist: 'Artist 1' },
      { id: 2, title: 'Track 2', artist: 'Artist 2' },
      // Add more tracks as needed
    ]);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <TrackList tracks={searchResults} />
    </div>
  );
}

export default RootComponent;
