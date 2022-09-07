import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import  pokemonDetails  from "../assets/styles/pokemonDetails.css";
import PokemonBar from './pokedetails/PokemonBar';
import PokemonMovements from './pokedetails/PokemonMovements';
import Pokeheader from './Pokeheader';

const PokemonDetails = () => {
  const [pokeDetails, setPokeDetails] = useState()
    const {name} = useParams()
    
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res=>setPokeDetails(res.data))
      .catch(err=>console.log(err))
    }, [])

    
    
  return (
    <div>
      <Pokeheader/>
        <article className={`details `}>
          <div className={`header-details bg-${pokeDetails?.types[0].type.name}`}>
            <img src={pokeDetails?.sprites.other['official-artwork']['front_default']} alt="pokemon" />
          </div>

          <div className={`details-name `}>
            <h1>#{pokeDetails?.order}</h1>
            <h1>{name}</h1>
            <div className='weigth-details'>
              <h5>Weight <br /><span>{pokeDetails?.weight}</span></h5>
              <h5>Height <br /><span>{pokeDetails?.height}</span></h5>
            </div>


          </div>

            <div className='type-skills'>
              <div className='type'>
                <h2>Type</h2>
                <span>{pokeDetails?.types[0]?.type.name}</span>
                <span>{pokeDetails?.types[1]?.type.name}</span>
              </div>

              <div className='skills'>
                <h2>Skills</h2>
                <span>{pokeDetails?.abilities[0].ability.name}</span>
                <span>{pokeDetails?.abilities[1].ability.name}</span>
              </div>
            </div>



        </article>
        <div className='main-movements'>
            <div className='movements-container'>
              <h2>Movements</h2>

              {
                pokeDetails?.moves.map(moves=>(
                  <PokemonMovements
                  moves = {moves.move}
                  />
                ))
              }
             
            </div>

        </div>
    </div>
  )
}

export default PokemonDetails