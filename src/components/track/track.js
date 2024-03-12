import '../track/track.css';

function Track() {
    return (
      <div className="trackContainer">
        <div className="title">Track Name</div>
        <div className="artist">Track Artist</div>
        <button className="addButton">+</button>
      </div>
    );
  }

  export default Track;