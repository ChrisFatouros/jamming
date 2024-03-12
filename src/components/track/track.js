import '../track/track.css';

function Track() {
    return (
      <div className="trackContainer">
        <div className="title">Song Name</div>
        <div className="artist">Artist |<span className='album'> Album</span> </div>
        <button className="addButton">+</button>
      </div>
    );
  }

  export default Track;