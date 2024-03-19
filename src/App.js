import './App.css';
import './components/header/headerNav.css';
import './components/search/search.css';
import './components/results/results.css';
import SearchForm from './components/search/search.js';
import ParentComponent from './components/tracklist/ParentComponent.js';
import { useState } from 'react';


function App() {
  
  const [tracklist, setTracklist] = useState([]);
  const addToTracklist = (track) => {
    setTracklist([...tracklist, track]);
    };


  return (
    <div className="App bgImg">
      <header className="headerNav">Harmony Hub</header>

      <SearchForm />

      <div className='container'>
        <ParentComponent />
      </div>


    </div>
  );
}

export default App;
