import React from "react";
import ParentComponent from "../tracklist/ParentComponent.js";

function Results({ addToTracklist, childData }) {
  return (
    <div className='results'>
      <div className='resultsTitle'>Results</div>
      <hr />
      <div className="SearchResults">
        {childData.length === 0 ? (
          <p className='default'>Search for songs</p>
        ) : (
          <ul>
            {childData.map(track => (
              <li key={track.id}>
                <div className="trackContainer">

                  <div className="albumArt"><img src={track.album.images.find(image => image.height === 300)?.url} alt="Album Art"></img></div>
                  
                  <div className="title">{track.name}</div>

                  <div className="artist">
                      {track.artists.map((artist, index) => (
                          <span key={artist.id}>
                            {artist.name}
                            {index !== track.artists.length - 1 && ', '}
                          </span>
                        ))} - <span className='album'> {track.album.name} </span></div>

                  
                  <button className="addButton" onClick={() => addToTracklist(track)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Results;

