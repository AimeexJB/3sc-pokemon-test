import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
    const [ pokemon, setPokemon ] = useState({
        pokemonIndex: '',
        name: '',
        image: ''
    });

    const [pokemonInfo, setPokemonInfo] = useState({
        description: ''
    })

    const getIndex = useParams();
    
    useEffect(() => {
        const { pokemonIndex } = getIndex;

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
            .then((res) => {
                setPokemon({
                    name: res.data.name,
                    image: res.data.sprites.front_default
                })
            })
    });

    return (
        <div className="container">
            {pokemon.name}
            <img src={pokemon.image} />
        </div>
      );
}

export default Pokemon