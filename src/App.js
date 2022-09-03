import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

import Navbar from './components/Nav';
import Pokemon from './components/Pokemon'

import Search from './pages/Search';
import Filter from './pages/Filter';
import ComparePokemon from './pages/ComparePokemon';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />

          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route exact path="/pokemon/:pokemonIndex" element={<Pokemon />} />
              <Route path="/search" element={<Search />} />
              <Route exact path="/search/pokemon/:pokemonIndex" element={<Pokemon />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/compare" element={<ComparePokemon />} />
          </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;

// let pokeArr = localStorage.getItem("favourite");
// pokeArr.push(pokemon.name);
// localStorage.setItem("favourite", pokeArr);
// localStorage.getItem("favourite");