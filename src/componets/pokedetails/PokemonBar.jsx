import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const PokemonBar = ({stats}) => {
    const [PokemonStat, setPokemonStat] = useState()
    useEffect(() => {
      axios.get(stats.url)
      .then(res=>setPokemonStat(res.data))
      .catch(err=>console.log(err))
    }, [])

    

  return (
    <div>
        <h1>{PokemonStat?.name}</h1>
    </div>
  )
}

export default PokemonBar