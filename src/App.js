import './App.css';
import './components/header/headerNav.css';
import './components/search/search.css';
import './components/results/results.css';
import SearchForm from './components/search/search.js';
import ParentComponent from './components/tracklist/ParentComponent.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    var client_id = 'a5d40fe661a741f68f7f27b86314c444';
    var redirect_uri = 'http://localhost:3000/';
    var scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';
    var state = '';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

  function handleLogin() {
    window.location = url;
  };

  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  },[]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  const [tracklist, setTracklist] = useState([]);
  const addToTracklist = (track) => {
    setTracklist([...tracklist, track]);
    };


  return (
    <div className="App bgImg">
      <header className="headerNav">Harmony Hub</header>
      
      {!token ?
        <button onClick={handleLogin}>Login to Spotify</button>
      :
        <button onClick={logout}>Logout of Spotify</button>
      }

      <SearchForm token={token} />

      <div className='container'>
        <ParentComponent />
      </div>


    </div>
  );
}

export default App;
