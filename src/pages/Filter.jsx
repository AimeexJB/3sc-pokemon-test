import React, { useEffect, useState } from "react";
import Axios from 'axios'; 
import { v4 as uuidv4 } from "uuid";

import PokemonList from '../components/PokemonList';

const Filter = () => {
    const [ games, getGames ] = useState([]);
    const [ generation, setGeneration ] = useState("generation-i");

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/generation/`)
            .then((games) => {
                getGames(games.data.results);
                console.log(games.data.results)
            })
            .catch((err) => console.log(err));
    }, []);

    const showGeneration = (e) => {
        setGeneration(e.target.classList[0])
        console.log(generation);
    }

    return (
        <div>
            <h2>Filter</h2>

            <div className="filter-button row">
                {games.map((game) => 
                    <button key={uuidv4()} className={game.name} onClick={showGeneration}> 
                        {game.name
                            .toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')} 
                    </button>
                )}
            </div>
    
            <PokemonList 
                url={`https://pokeapi.co/api/v2/generation/${generation}`}
            />
        </div>
    )
}
 
export default Filter