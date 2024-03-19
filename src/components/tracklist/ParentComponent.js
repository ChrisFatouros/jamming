// ParentComponent.js
import React, { useState } from 'react';
import Playlist from './Playlist.js';
import Results from '../results/results';

function ParentComponent() {
  const [tracklist, setTracklist] = useState([]);
  let playlistName = "";

  function addToTracklist(track) {
    if (!tracklist.some(item => item.track.id === track.track.id)) {
      setTracklist([...tracklist, track]);
    } else {
      console.log("Track already exists in the playlist.");
    }
  }
  
  function removeTrack(track) {
    const newTracklist = tracklist.filter(item => item.track.id !== track.track.id);
    setTracklist(newTracklist);
  }

  function handleSubmit() {
    const newPlaylistName = document.getElementById('plName').value;
    console.log(newPlaylistName);
    const uris = tracklist.map(item => item.track.uri);
    console.log(uris);
    setTracklist([]);
    document.getElementById('plName').value = "Playlist Name";
  }
  
  
  return (
    <div className='container'>
      <Results addToTracklist={addToTracklist} tracklist={tracklist} />
      <Playlist tracklist={tracklist} removeTrack={removeTrack} handleSubmit={handleSubmit} />
    </div>
  );
}

export default ParentComponent;
