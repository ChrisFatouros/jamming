// ParentComponent.js
import React, { useState } from 'react';
import Playlist from './Playlist.js';
import Results from '../results/results';

function ParentComponent() {
  const [tracklist, setTracklist] = useState([]);

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

  return (
    <div className='container'>
      <Results addToTracklist={addToTracklist} tracklist={tracklist} />
      <Playlist tracklist={tracklist} removeTrack={removeTrack} />
    </div>
  );
}

export default ParentComponent;
