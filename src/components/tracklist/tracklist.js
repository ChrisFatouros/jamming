// Tracklist.js
import React from 'react';
import '../tracklist/tracklist.css';

export function Tracklist({ tracklist }) {
  return (
    <div className="tracklist">
      <input type='text' defaultValue="Playlist Name" className='playlistTitle' />
      <hr />
      <ul>
        {tracklist.map(track => (
          <li key={track.id}>
            <div className="trackContainer">
              <div className="title">{track.title}</div>
              <div className="artist">{track.artist} | <span className='album'>{track.album}</span></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
