import { Routes, Route } from 'react-router-dom'
import Home from './componets/Home'
import Pokedex from './componets/Pokedex'
import PokemonDetails from './componets/PokemonDetails'
import ProtectedRoutes from './componets/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedex/:name' element={<PokemonDetails/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
