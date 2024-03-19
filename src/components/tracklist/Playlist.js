// Playlist.js
import '../tracklist/tracklist.css';
import '../track/track.css'
import '../SelectedTracks/SelectedTracks.js';
import ParentComponent from '../tracklist/ParentComponent.js';


function Playlist({tracklist, removeTrack}) {
    return (
      <div className="tracklist">
        <input type='text' defaultValue="Playlist Name" className='playlistTitle'>
        </input>
        <hr />

        <div className="SearchResults"> 
          {tracklist.length === 0 && <p className='default'>Add songs</p>}
          
          <ul>
            {tracklist.map(tracklist => (
                <li key={tracklist.id}>
                  <div className="trackContainer">
                    <div className="title">{tracklist.track.title}</div>
                    <div className="artist">{tracklist.track.artist} | <span className='album'> {tracklist.track.album}</span></div>
                    <button className="addButton" onClick={() => removeTrack(tracklist)}>-</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <button className='saveToButton'>Add to Spotify</button>
    </div>
    );
  }
  
  export default Playlist;