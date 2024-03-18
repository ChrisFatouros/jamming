// Track.js
import React from 'react';
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
  
  let [SelectedSongs, SetSelectedSongs] = useState([]);


  return (
    <>  
      {tracks.length === 0 && <p className='default'>Search for songs</p>}

      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <div className="trackContainer">
              <div className="title">{track.title}</div>
              <div className="artist">{track.artist} |<span className='album'> {track.album}</span> </div>
              <button className="addButton" onClick={() => alert(JSON.stringify(track))}>Song Info</button>
              <button onClick={() => { SetSelectedSongs([...SelectedSongs, track])}}>Add Song to new Array</button>
              <button onClick={() => alert(JSON.stringify(SelectedSongs))}>Show New Array</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Track;
