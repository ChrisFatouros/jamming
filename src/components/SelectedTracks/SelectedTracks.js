import React, { useState } from 'react';
import '../track/track.js';

function ShowSelectedTracks() {
  
    let SelectedSongs = [{      id: 1,
        title: "Song Title 1",
        artist: "Artist 1",
        album: "Album 1"}];

    return (
      <div>  
        <ul>
          {SelectedSongs.map(SelectedSongs => (
            <li key={SelectedSongs.id}>
              <div className="trackContainer">
                <div className="title">{SelectedSongs.title}</div>
                <div className="artist">{SelectedSongs.artist} |<span className='album'> {SelectedSongs.album}</span></div>
                <button className="addButton">-</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default ShowSelectedTracks;