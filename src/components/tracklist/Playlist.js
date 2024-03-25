// Playlist.js
import '../tracklist/tracklist.css';
import '../track/track.css'

import ParentComponent from '../tracklist/ParentComponent.js';

function Playlist({tracklist, removeTrack, handleSubmit, childData}) {
    return (
      <div className="tracklist">
        <input id='plName' type='text' defaultValue="Playlist Name" className='playlistTitle'>
        </input>
        <hr />

        <div className="SearchResults"> 
        {!tracklist || tracklist.length === 0 ? (
          <p className='default'>Search for songs</p>
        ) : (
          <ul>
            {tracklist.map(tracklist => (
                <li key={tracklist.id}>
                  <div className="trackContainer">

                    <div className="albumArt"><img src={tracklist.album.images.find(image => image.height === 300)?.url} alt="Album Art"></img></div>


                    <div className="title">{tracklist.name}</div>
                    
                    <div className="artist">
                      {tracklist.artists.map((artist, index) => (
                          <span key={artist.id}>
                            {artist.name}
                            {index !== tracklist.artists.length - 1 && ', '}
                          </span>
                        ))} - <span className='album'> {tracklist.album.name} </span></div>

                    <button className="addButton" onClick={() => removeTrack(tracklist)}>-</button>

                  </div>
                </li>
              ))}
          </ul>
        )}
        </div>

        <button className='saveToButton' onClick={handleSubmit} >Add to Spotify</button>
    </div>
    );
  }

  
  export default Playlist;