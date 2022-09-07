import React from 'react'
import '../assets/styles/pokeheader.css'

const Pokeheader = () => {
  return (
         <div className='header'>
            <img src="./pokedex.png" alt="pokedex" />
            <div className='header-red'></div>
            <div className='header-black'></div>
        </div>

  )
}

export default Pokeheader