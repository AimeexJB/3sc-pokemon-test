import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
    const [ pokemon, setPokemon ] = useState({
        pokemonIndex: '',
        name: '',
        image: '',
        height: '',
        weight: '',
    });
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonInfo, setPokemonInfo] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [generation, setGeneration] = useState("");
    const [eggGroups, setEggGroups] = useState([]);
    const [catchRate, setCatchRate] = useState("");

    const getIndex = useParams();
    
    useEffect(() => {
        const { pokemonIndex } = getIndex;

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
            .then((res) => {
                setPokemon({
                    name: res.data.name,
                    image: res.data.sprites.front_default,
                    height: Math.round((res.data.height * 0.328084 + 0.00001) * 100) / 100,
                    weight: Math.round((res.data.weight * 0.220462 + 0.00001) * 100) / 100
                })
                setPokemonStats(res.data.stats)
                setAbilities(res.data.abilities)
            })

        Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`)
            .then((res) => {
                setPokemonInfo(res.data.flavor_text_entries[0])
                setGeneration(res.data.generation)
                setEggGroups(res.data.egg_groups)
                setCatchRate(res.data.capture_rate)
            })

    });

    const addToFavourites = () => {
        // let pokeArr = localStorage.getItem("favourite");
        // pokeArr.push(pokemon.name);
        // localStorage.setItem("favourite", pokeArr);
        // localStorage.getItem("favourite");
    }

    return (
        <div className="container">
            <div className='pokemon-info'>
                <h2>
                {pokemon.name
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')} 
                </h2>

                <img src={pokemon.image} />

                {/* <button onClick={addToFavourites()}>Add to Favourites</button> */}
            </div>
            
            <div className='pokemon-description'>
                <h4>Description</h4>
                {pokemonInfo.flavor_text}
            </div>

            <div>
                Height: {pokemon.height} ft
                <br />
                Weight: {pokemon.weight} lbs
            </div>

            <div>
                {abilities.map((ability) =>
                    <div>
                        {ability.name}
                    </div>
                )}
            </div>

            <div>
                Generation: {generation.name}
            </div>

            <div>
                Egg Groups: 
                {eggGroups.map((eggGroup) =>
                    <> {eggGroup.name}; </>
                )}
            </div>

            <div>
                Catch Rate: {catchRate}%
            </div>

            <div className='stats-table'>
                <h4>Stats</h4>
                <table className='table table-bordered'>
                {pokemonStats.map((stat) => 
                    <>
                        <tr>
                            <th>{stat.stat.name}</th>
                    
                            <td>{stat.base_stat}</td>
                        </tr>
                    </>
                )}
                </table>
            </div>
        </div>
      );
}

export default Pokemon

