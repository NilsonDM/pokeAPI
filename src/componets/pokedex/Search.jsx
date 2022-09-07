import React from 'react'
import search from "../../assets/styles/search.css";

const Search = ({setPokeSearch, setSelectType}) => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPokeSearch(e.target.search.value.trim().toLowerCase())
        setSelectType('All')
        e.target.search.value = ''
    }
  return (
    <form onSubmit={handleSubmit}>
        <input id='search' type="text" placeholder='Search a pokemon' />
        <button>Search</button>
    </form>
  )
}

export default Search