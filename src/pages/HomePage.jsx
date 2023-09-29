import { useRef } from "react"
import {setTrainerSlice} from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../components/PokedexPage/styles/Pokecard.css'


const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch= useDispatch()

  const navigate= useNavigate()

  const handleTrainer= e => {
e.preventDefault()
dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
navigate('/pokedex')
  }
  return (
    <div >
        <h1>Pokedex</h1>
        <h2>Hi trainer</h2>
        <p>To start, please, enter your trainer name</p>
        <form onSubmit={handleTrainer}>
            <input ref={inputTrainer} type="text"/>
            <button className="boton">Star!</button>
        </form>
    </div>
  )
}

export default HomePage