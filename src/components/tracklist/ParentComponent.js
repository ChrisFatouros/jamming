// ParentComponent.js
import React, { useState } from 'react';
import Track from './Track';
import { Tracklist } from './Tracklist';

function ParentComponent() {
  const [tracklist, setTracklist] = useState([]);

  const addToTracklist = (track) => {
    setTracklist([...tracklist, track]);
  };

  return (
    <div>
      <h1>Tracks</h1>
      <Track onAddToTracklist={addToTracklist} />
      <h1>Tracklist</h1>
      <Tracklist tracklist={tracklist} />
    </div>
  );
}

export default ParentComponent;
