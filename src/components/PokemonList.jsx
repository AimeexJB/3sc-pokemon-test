import { useState } from "react";
import Axios from 'axios'; 
import { Link } from 'react-router-dom'

const PokemonList = () => {
    

    return (
        <div>
            <div>
                <h4>Pokemon List</h4>
                <Link to="/search">Search Pokemon</Link>
                <Link to="/filter">Filter Pokemon</Link>
                
            </div>

            
            
        </div>
    )
}
 
export default PokemonList