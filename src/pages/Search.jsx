import { useState } from "react";
import { useParams } from 'react-router-dom';
import Axios from 'axios'; 
import { Link } from 'react-router-dom';

const Search = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: '',
        image: '',
        pokemonIndex: '',
        id: ''
    });

    const getIndex = useParams();

    const searchPokemon = () => {
        const { pokemonIndex } = getIndex;

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
            setPokemon({
                name: pokemonName,
                image: res.data.sprites.front_default,
                id: res.data.id
            })
            setSelectedPokemon(true)
        })
    }

    return (
        <div className="container">
                <div className="row">
                    <h4>Search</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={(event) => setPokemonName(event.target.value)} />
                        <button className="btn btn-outline-secondary" onClick={searchPokemon}>Search</button>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                <div>
                    {!selectedPokemon ? 
                        (
                            <p>Who's That Pokemon?</p>
                        ) : 
                        ( 
                            <Link to={`pokemon/${pokemon.id}`}>
                               <div className="col">
                                    <div className="card border-info"> 
                                        <div className="card-header text-bg-info">
                                            <h2>
                                                {pokemon.name.toLowerCase()
                                                .split(' ')
                                                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                                .join(' ')}
                                            </h2>  
                                        </div>
                                        <div className="card-img">
                                            <img src={pokemon.image} /> 
                                        </div>
                                    </div> 
                                </div> 
                            </Link>
                            
                            
                        )
                    }  
                </div>
            </div>
            
        </div>
    )
}
 
export default Search