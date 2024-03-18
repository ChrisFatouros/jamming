import React from 'react';
import '../tracklist/tracklist.css';
import '../track/track.css';
import ShowSelectedTracks from '../SelectedTracks/SelectedTracks';

function Tracklist() {
    return (
      <div className="tracklist">
        <input type='text' defaultValue="Playlist Name" className='playlistTitle'>
        </input>
        <hr />
        <ShowSelectedTracks />

        <button className='saveToButton'>Add to Spotify</button>
      </div>
    );
  }
  
  export default Tracklist;