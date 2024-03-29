// ParentComponent.js
import React, { useState } from 'react';
import Playlist from './Playlist.js';
import Results from '../results/results';
import "../tracklist/tracklist.css";
import axios from 'axios';

function ParentComponent({childData, token}) {
  const [tracklist, setTracklist] = useState([]);
  const [submitted, setSubmitted] = useState(false); // State to manage submission status

  function addToTracklist(track) {
    if (!tracklist.some(item => item.id === track.id)) {
      setTracklist([...tracklist, track]);
    } else {
      console.log("Track already exists in the playlist.");
    }
  }
  
  function removeTrack(track) {
    const newTracklist = tracklist.filter(item => item.id !== track.id);
    setTracklist(newTracklist);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlaylistName = document.getElementById('plName').value;
    const uris = tracklist.map(item => item.uri);
  
    try {
      // Fetch User ID
      const userProfile = await axios.get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const userID = userProfile.data.id;
      console.log(userID);
  
      // Create Playlist
      const playlistResponse = await axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        name: newPlaylistName,
        public: false // Example, making the playlist private
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const playlistID = playlistResponse.data.id;
  
      // Add Tracks to the Playlist
      if (uris.length > 0) {
        await axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
          uris: uris
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
  
      // Set submitted to true on successful submission
      setSubmitted(true);
    } catch (error) {
      console.error("Error creating playlist: ", error.response.data);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };
  
  return (
    <>
    <div className='container'>
      {submitted ? (
        <div>
          <div className='successBox'>
            <h2>Success!</h2>
            <p>Your playlist has been created and tracks have been added successfully.</p>
            <button className='successButton' onClick={handleRefresh}>Continue</button>
          </div>
        </div>
      ) : (
        <>
          <Results addToTracklist={addToTracklist} tracklist={tracklist} childData={childData}/>
          <Playlist tracklist={tracklist} removeTrack={removeTrack} handleSubmit={handleSubmit} childData={childData}/>
        </>
      )}
    </div>
    </>
  );
}

export default ParentComponent;
