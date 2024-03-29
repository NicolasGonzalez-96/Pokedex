import { useContext, useEffect } from "react"
import { PokeContext } from "../context/PokeContext"
import { useNavigate } from "react-router-dom"

export default function Pokemones() {

    useEffect(()=>{
        setOptionSelected("bulbasaur")
    }, [])
    
    const { dataPokemon, optionSelected, setOptionSelected } = useContext(PokeContext)
    const handleSelect = ({target : {value}}) => setOptionSelected(value)

    const navigate = useNavigate()

    const irAlPokemon = () => {
        if (!optionSelected) {
            alert("debe seleccionar una opcion")
        } else {
            navigate(`/pokemones/${optionSelected}`)
        }
    }

    return ( 
        <div className="veiwPokemon">
            <h1>Seleccione un pokemon</h1>
            <select onChange={(element) => handleSelect(element)}>
                {dataPokemon?.map((pokemon, index) =>
                    <option value={pokemon.name} key={index}>{pokemon.name}</option>
                )}
            </select>
            <button onClick={irAlPokemon} >Detalles</button>
        </div>
    )
}