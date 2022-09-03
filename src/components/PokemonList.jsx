

import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {

    state = {
        pokemon: []
    }

    async componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => {
            this.setState({ pokemon: response.data['results'] });
        })
        .catch(error => {
            console.log(error);
        });

    }

    render() {

        const PokeList = this.state.pokemon.map(pokemon => (
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
            />
        ))

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <h2>Pokemon List</h2>

                        {PokeList}

                    </div> 
                </div>
                
                
            </React.Fragment>

        );
    }
}
