import './App.css';
import './components/header/headerNav.css';
import './components/search/search.css';
import './components/results/results.css';
import SearchForm from './components/search/search.js';
import Results from './components/results/results.js';
import Tracklist from './components/tracklist/tracklist.js';


function App() {


  return (
    <div className="App bgImg">
      <header className="headerNav">Harmony Hub</header>

      <SearchForm />

      <div className='container'>
        <Results />
        <Tracklist />
      </div>


    </div>
  );
}

export default App;
