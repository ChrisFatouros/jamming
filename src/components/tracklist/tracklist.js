import '../tracklist/tracklist.css';
import '../track/track.css';
import Track from '../track/track.js';

let playlist = [];

export function addToPlaylist(track) {
  playlist.push(track);
}

export function getPlaylist() {
  return playlist;
}

function Tracklist() {
    return (
      <div className="tracklist">
        <input type='text' defaultValue="Playlist Name" className='playlistTitle'>
        </input>
        <hr />
          <ul className='playlistList'>
            <Track />
          </ul>
        <button className='saveToButton'>Add to Spotify</button>
    </div>
    );
  }
  
  export default Tracklist;