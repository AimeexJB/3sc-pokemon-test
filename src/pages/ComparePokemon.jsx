import React, { useEffect, useState } from "react";
import Axios from 'axios'; 

import ComparePreview from "../components/ComparePreview";
import CompareSearch from "../components/CompareSearch";

const ComparePokemon = () => {
    
    const [pokemon, setPokemon] = useState([]);
    const [pokemon1, setPokname1] = useState("");
    const [pokemon2, setPokname2] = useState("");
    const [pokStats1, setPokStats1] = useState([]);
    const [pokStats2, setPokStats2] = useState([]);
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
        let list = [];
        Axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=900`)
            .then((pokemon) => {
                list = pokemon.data.results;
                setPokemon(list);
            })
            .catch((err) => console.log(err));
    }, []);

    async function getPokemon() {
        const result1 = await Axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon1}`
        );
        setPokStats1(result1.data);

        const result2 = await Axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon2}`
        );
        setPokStats2(result2.data);

        setLoaded(true);
    }

    function onChange1(pokemonName) {
        setPokname1(pokemonName);
    }

    function onChange2(pokemonName) {
        setPokname2(pokemonName);
    }

    function onSubmit(e) {
        e.preventDefault();
        getPokemon();
    }

    if (loaded) {
        return (
            <div className="container">
                <h1>Compare Pokemon</h1>
                <CompareSearch
                    onChange1={onChange1}
                    onChange2={onChange2}
                    onSubmit={onSubmit}
                    pokemon1={pokemon1}
                    pokemon2={pokemon2}
                    options={pokemon.map((pokemon) => ({
                        value: pokemon.name,
                        name: pokemon.name
                            .toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' '),
                    }))}
                />
                <div className="preview">
                    <ComparePreview 
                        pokemon1={pokStats1} 
                        pokemon2={pokStats2}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className="App">
                <h1>Compare Pokemon</h1>
                <CompareSearch
                    onChange1={onChange1}
                    onChange2={onChange2}
                    onSubmit={onSubmit}
                    pokemon1={pokemon1}
                    pokemon2={pokemon2}
                    options={pokemon.map((pokemon) => ({
                    value: pokemon.name,
                    name: pokemon.name
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' '),
                    }))}
                />
            </div>
        );
    }
}
 
export default ComparePokemon