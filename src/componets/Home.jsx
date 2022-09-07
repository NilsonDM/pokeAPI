import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import  homeCSS  from "../assets/styles/home.css";
import  Pokeheader  from "./Pokeheader";


const Home = () => {

    const dispatch =  useDispatch()
    const navigate = useNavigate()

    const handleSubmit= (e)=>{
        e.preventDefault()
        const  inputValue = e.target.name.value.trim()
        if (inputValue.length !== 0) {
            dispatch(setNameTrainer(inputValue))
            navigate('/pokedex')
        }
            
    }


  return (
    <>

        <Pokeheader/>
    <div className='home-container'>
      
            <div className='title'>
                <h1>Hi trainer</h1>
            </div>

            <div className='home-form'>
                <p>To start give me your name</p>
                <form onSubmit={handleSubmit} className='form-home'>
                    <input id='name' type="text" />
                    <button>start</button>
                </form>
            </div>


    </div>
    </>
  )
}

export default Home