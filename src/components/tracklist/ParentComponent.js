// ParentComponent.js
import React, { useState } from 'react';
import Playlist from './Playlist.js';
import Results from '../results/results';

function ParentComponent() {
  const [tracklist, setTracklist] = useState([]);

  function addToTracklist(track) {
    setTracklist([...tracklist, track]);
    console.log(tracklist);
    };

  return (
    <div className='container'>
      <Results addToTracklist={addToTracklist} tracklist={tracklist}/>
      <Playlist tracklist={tracklist} />
    </div>
  );
}

export default ParentComponent;
