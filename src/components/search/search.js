import React, { useState } from 'react';
import './search.css'
import App from '../../App';
import axios from 'axios';


function SearchForm({ onSearch, token }) {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([])
  const data = "";

  const searchArtists = async (e) => {
    e.preventDefault();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
        params: {
          q: searchKey,
          type: "track"
        }
    })
    console.log(data);
    setArtists(data);
  };

  return (
    <form onSubmit={searchArtists}>
      <input
        className="search"
        type="text"
        placeholder="Search for songs ..."
        onChange={e => setSearchKey(e.target.value)}
      />
      <button className='searchbutton' type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
