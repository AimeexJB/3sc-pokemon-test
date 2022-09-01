import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from "./components/PokemonList"
import Search from './components/Search';
import Filter from './components/Filter';
import ComparePokemon from './components/ComparePokemon';

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Pokemon App</h1>

      <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/compare" element={<ComparePokemon />} />
      </Routes>
            
      </div>
    </Router>
    
  );
}

export default App;
