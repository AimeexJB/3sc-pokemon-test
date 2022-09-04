

import React, { Component } from 'react';
import Axios from 'axios';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {

    state = {
        pokemon: []
    }

    async componentDidMount() {
        Axios.get(this.props.url)
        .then(response => {
            if(this.props.url.includes('generation')) {
                this.setState({ pokemon: response.data.pokemon_species })
            } else {
                this.setState({ pokemon: response.data['results'] });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate() {
        Axios.get(this.props.url)
        .then(response => {
            if(this.props.url.includes('generation')) {
                this.setState({ pokemon: response.data.pokemon_species })
            } else {
                this.setState({ pokemon: response.data['results'] });
            }
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
