import React from 'react'

const PokemonMovements = ({moves}) => {
  return (
    <div className='movements'>
        <span>{moves.name}</span>
    </div>
  )
}

export default PokemonMovements