import '../tracklist/tracklist.css';
import '../track/track.css';
import '../AddSong/AddSong.js';


function Tracklist() {
    return (
      <div className="tracklist">
        <input type='text' defaultValue="Playlist Name" className='playlistTitle'>
        </input>
        <hr />

        <button className='saveToButton'>Add to Spotify</button>
    </div>
    );
  }
  
  export default Tracklist;