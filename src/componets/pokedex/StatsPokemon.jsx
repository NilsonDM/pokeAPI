import React from 'react'
import pokemonCard from '../../assets/styles/pokemonCard.css'

const StatsPokemon = ({infoStat}) => {
  return (
    <li>
        <h4>{infoStat.stat.name}</h4>
        <p>{infoStat['base_stat']}</p>
    </li>
  )
}

export default StatsPokemon