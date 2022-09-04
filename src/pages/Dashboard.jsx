import React, { Component } from 'react'

import PokemonList from '../components/PokemonList'

export default class Dashboard extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col'>
            <PokemonList
              url='https://pokeapi.co/api/v2/pokemon/?limit=900'
            />
        </div>
      </div>
    )
  }
}
