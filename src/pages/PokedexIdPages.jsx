import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './style/PokedexIdPages.css'

const PokedexIdPages = () => {

const {id} = useParams()

const url =`https://pokeapi.co/api/v2/pokemon/${id}`
const [pokemon, getPokemon]=useFetch(url)

useEffect(()=>{
getPokemon()
},[id])

  console.log(pokemon)

  return (
    <div>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt ="" />
        <h2 className="Pokename">{pokemon?.name}</h2>
      </header>
      <div>
        <h2 className="Texto">Los poderes de este personaje son los siguientes </h2>
      </div>
      <div>
        <ul className="Poderes">
          {
            pokemon?.moves.map(moveInfo => (
              <li className="lista"
               key={moveInfo.move.url}>{moveInfo.move.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default PokedexIdPages