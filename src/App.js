import './App.css';
import './components/header/headerNav.css';
import './components/search/search.css';
import './components/results/results.css';
import './components/searchButton/searchButton.css';
import Results from './components/results/results.js';
import Tracklist from './components/tracklist/tracklist.js';

function App() {
  return (
    <div className="App bgImg">
      <header className="headerNav">Jammming</header>

      <input type='text' className='search' placeholder="Find your favorite songs!"></input>

      <button type="submit" value="Submit" className='searchbutton'>SEARCH</button>

      <div className='container'>
        <Results />
        <Tracklist />
      </div>
      

    </div>
  );
}

export default App;
