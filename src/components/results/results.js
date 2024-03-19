import React from "react";
import ParentComponent from "../tracklist/ParentComponent.js";

let tracks = [
  {
    id: 1,
    title: "Song Title 1",
    artist: "Artist 1",
    album: "Album 1",
    uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXA"
  },
  {
    id: 2,
    title: "Song Title 2",
    artist: "Artist 2",
    album: "Album 2",
    uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXB"
  },
  {
    id: 3,
    title: "Song Title 3",
    artist: "Artist 3",
    album: "Album 3",
    uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXC"
  }
];

function Results({addToTracklist}) {
  return (
    <div className='results'>
      <div className='resultsTitle'>Results</div>
      <hr />

        <div className="SearchResults">  
        {tracks.length === 0 && <p className='default'>Search for songs</p>}
        <ul>
          {tracks.map(track => (
            <li key={track.id}>
              <div className="trackContainer">
                <div className="title">{track.title}</div>
                <div className="artist">{track.artist} | <span className='album'> {track.album}</span></div>
                <button className="addButton" onClick={() => addToTracklist({track})}>+</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Results;
