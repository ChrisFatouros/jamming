import '../track/track.css';
import React, { useState } from 'react';

function Track() {

  let tracks = [
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

  return (
    <>  
      {tracks.length === 0 && <p className='default'>Search for songs</p>}

      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <div className="trackContainer">
              <div className="title">{track.title}</div>
              <div className="artist">{track.artist} |<span className='album'> {track.album}</span> </div>
              <button className="addButton" onClick={() => alert(JSON.stringify(track))}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Track;
