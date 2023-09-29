import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './components/PokedexPage/PokedexPage'
import PokedexIdPages from './pages/PokedexIdPages'
import ProtectedRoutes from './pages/ProtectedRoutes'
import './index.css'

function App() {

  return (
    <div className='principal'>
      <Routes>
        <Route path = '/' element={<HomePage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex/:id' element={<PokedexIdPages />}/>
          <Route path = '/pokedex' element={<PokedexPage />} />
        </Route>
      </Routes> 
      </div>
  )
}

export default App
