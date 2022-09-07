import React, { useEffect, useState } from 'react'
import axios from "axios";
import StatsPokemon from './StatsPokemon';
import { useNavigate } from "react-router-dom";
import pokemonCard from "../../assets/styles/pokemonCard.css";

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${pokemon?.name}`)
    }

    
    

    return (

        <div className={`pokemon-card bg-${pokemon?.types[0].type.name}`} onClick={handleClick}>
            <header>
                <img src={pokemon?.sprites.other['official-artwork']['front_default']} alt="pokemon" />
            </header>
                


            <section className='body'>
                <h3>{pokemon?.name}</h3>
                <ul>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.type.url}>{type.type.name}</li>
                        ))
                    }
                </ul>
            </section>

            <footer>
                <ul className='stats'>
                    {
                        pokemon?.stats.map(stat => (
                            <StatsPokemon
                                key={stat.stat.url}
                                infoStat={stat} />
                        ))
                    }
                </ul>
            </footer>

        </div>


    )
}

export default PokemonCard