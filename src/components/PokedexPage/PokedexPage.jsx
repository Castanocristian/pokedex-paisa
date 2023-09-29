import { useSelector } from "react-redux"
import useFetch from "../../hooks/useFetch"
import { useEffect, useRef , useState} from "react"
import PokeCard from "./PokeCard"
import SelectType from "./SelectType"
import './styles/Pokecard.css'
import './styles/PokedexPage.css'


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector(store=>store.trainer)

  const inputSearch= useRef()

  const url ='https://pokeapi.co/api/v2/pokemon?offset=0&limit=24'

  const [pokemons, getpokemons, getTypePokemon ] = useFetch(url)

  useEffect (() =>{
    if(typeSelected === 'allPokemons'){
       getpokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

const handleSearch = e =>{
  e.preventDefault()
 setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokefiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div>
      <p className="titulo"> Hi {trainer} </p>
      <div className="filters-pokemon">
        <form onSubmit={handleSearch}>
          <input className="formulario" ref={inputSearch}type="text" />
          <button className="boton">Search Pokemon</button>
        </form>
        <SelectType 
        setTypeSelected={setTypeSelected}
        />
      </div>
      <div className="Select">
        {
          pokefiltered?.map( poke=>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          )) 
        }
      </div>
    </div>
  )
}

export default PokedexPage