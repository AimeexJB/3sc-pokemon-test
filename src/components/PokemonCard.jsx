import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class PokemonCard extends Component {

    state = {
        name: '',
        pokemonIndex: '',
        pokemonImage: ''
    }

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
            console.log(res);
            this.setState({ pokemonImage: res.data.sprites.front_default });

        })

        this.setState({ name, pokemonIndex });
        
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                    <div className="card border-info">
                        <div className="card-header text-bg-info">
                            {this.state.pokemonIndex}
                        </div>
                        <div className="card-img">
                            <img src={this.state.pokemonImage} />
                        </div>
                        <div className="card-body">
                            {this.state.name
                                .toLowerCase()
                                .split(' ')
                                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')
                            }
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}