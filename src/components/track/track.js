// Track.js
import React from 'react';
import '../track/track.css';

const tracks = [
  {
    id: 1,
    title: "Song Title 1",
    artist: "Artist 1",
    album: "Album 1"
  },
  {
    id: 2,
    title: "Song Title 2",
    artist: "Artist 2",
    album: "Album 2"
  },
  {
    id: 3,
    title: "Song Title 3",
    artist: "Artist 3",
    album: "Album 3"
  }
];

function Track({ onAddToTracklist }) {
  const handleAddToTracklist = (track) => {
    onAddToTracklist(track);
  };

  return (
    <div>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <div className="trackContainer">
              <div className="title">{track.title}</div>
              <div className="artist">{track.artist} | <span className='album'>{track.album}</span></div>
              <button className="addButton" onClick={() => handleAddToTracklist(track)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Track;
