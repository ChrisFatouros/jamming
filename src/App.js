import './App.css';
import './components/header/headerNav.css';
import './components/search/search.css';
import './components/results/results.css';
import Results from './components/results/results.js';
import Tracklist from './components/tracklist/tracklist.js';
import SearchForm from './components/search/search.js';

function App() {


  return (
    <div className="App bgImg">
      <header className="headerNav">Jammming</header>

      <SearchForm />

      <div className='container'>
        <Results />
        <Tracklist />
      </div>
      

    </div>
  );
}

export default App;
