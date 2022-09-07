import React, { useEffect, useState } from 'react'
import  axios from "axios";
import search from "../../assets/styles/search.css";

const SelectType = ({selectType,setSelectType, setPokeSearch}) => {
    const [pokemonType, setPokemonType] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res=> setPokemonType(res.data.results))
            .catch(err=> console.log(err))
    }, [])

    const handleChange = (e)=>{
        setSelectType(e.target.value)
        setPokeSearch('')
    }
  return (
    
        <select onChange={handleChange}>
            <option value={selectType}>All pokemons</option>
            {
                pokemonType?.map(type=>(
                    <option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>           
    
  )
}

export default SelectType