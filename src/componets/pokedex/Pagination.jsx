import React, { useState } from 'react'
import '../../assets/styles/pagination.css'

const Pagination = ({page,setPage, maxPokemons}) => {
  const [input, setInput] = useState(1)
  
  const nextPage = ()=>{
    setInput (parseInt( input) + 1)
    setPage(page + 1)
  }
  const previousPage = ()=>{
    setInput (parseInt (input) - 1)
    setPage(page - 1)
  }
  
  const onKeyDown = (e)=>{
    if (e.keyCode == 13) {
        setPage(parseInt(e.target.value))
        if (parseInt(e.target.value < 1) || 
        parseInt(e.target.value) > Math.ceil(maxPokemons) || 
        isNaN(parseInt(e.target.value))) {
            setPage(1)
            setInput(1)
            
        }else{
            setPage(parseInt(e.target.value))
        }
        
    }
  }

  const onChange = (e)=>{
    setInput(e.target.value)
  }
    return (
    <div className='pagination-container'>
        <button disabled={page === 1 || page < 1} onClick={previousPage}>
            <i className="fas fa-caret-square-left"></i>
        </button>
        <input onChange={(e)=>onChange(e)} onKeyDown={(e)=>onKeyDown(e)} name='page' autoComplete='off' value={input} />
        <button disabled={page === Math.ceil(maxPokemons) || page > maxPokemons} onClick={nextPage}>
            <i className="fas fa-caret-square-right"></i>
        </button>
    </div>
  )
}

export default Pagination