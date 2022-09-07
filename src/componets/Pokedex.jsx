import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './pokedex/PokemonCard'
import { useSelector } from 'react-redux/es/exports'
import Search from './pokedex/Search'
import SelectType from './pokedex/SelectType'
import pokedexCSS from '../assets/styles/pokedex.css'
import Pokeheader from './Pokeheader'
import Pagination from './pokedex/Pagination'

const Pokedex = () => {
    const [pokemon, setPokemon] = useState()
    const [pokeSearch, setPokeSearch] = useState()
    const [selectType, setSelectType] = useState('All')

    /*Pagination states */
    const [page, setPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(10)
    const maxPokemons = pokemon?.results.length / pokemonPerPage

    useEffect(() => {
        if (pokeSearch || selectType !== 'All') {
            if (pokeSearch) {
                const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
                const obj = {
                    results: [
                        {
                            url
                        }
                    ]
                }
                setPokemon(obj)
            }else{
                axios.get(`https://pokeapi.co/api/v2/type/${selectType}`)
                .then(res=> {
                    const arr = res.data.pokemon.map(e => e.pokemon )
                    setPokemon({results: arr})
                })

                .catch(err=> console.log(err))
            }
                
        }else{
            'https://pokeapi.co/api/v2/pokemon/'
            axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res=> setPokemon(res.data))
            .catch(err=> console.log(err))
        }
    }, [pokeSearch, selectType])

const nameTrainer = useSelector(state=> state.nameTrainerSlice)


  return (
    <div className='pokedex-container'>
      <Pokeheader/>
            

        <div className='pokedex-header'>
            <h2>Welcome {nameTrainer}, <span>here you can find your favorite pokemon</span></h2>
            <div className='pokedex-header-flex'>
                <Search setSelectType={setSelectType} setPokeSearch = {setPokeSearch}/>
                <SelectType setPokeSearch={setPokeSearch} selectType={selectType} setSelectType={setSelectType}/>
            </div>

        </div>

        <Pagination
        page={page}
        setPage={setPage}
        pokemonPerPage={pokemonPerPage}
        maxPokemons={maxPokemons}/>
        <div className='cards-container'>
            {
                pokemon?.results
                .slice(
                    (page - 1)* pokemonPerPage,
                    (page - 1)* pokemonPerPage + pokemonPerPage)
                .map(pokemon=>(
                    <PokemonCard
                    key={pokemon.url}
                    url={pokemon.url} />
                ))
            }
        </div>
        <Pagination
        page={page}
        setPage={setPage}
        pokemonPerPage={pokemonPerPage}
        maxPokemons={maxPokemons}/>
    </div>
  )
}

export default Pokedex