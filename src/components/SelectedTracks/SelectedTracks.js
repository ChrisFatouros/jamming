import React from 'react';
import '../track/track.js';
import SelectedSongs from '../track/track.js'

function ShowSelectedTracks(SelectedSongs) {
  
    return (
      <>  
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
      </>
    );
  };
  
  export default ShowSelectedTracks;