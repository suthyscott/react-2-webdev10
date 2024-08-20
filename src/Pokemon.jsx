import { useState, useEffect } from "react"
import axios from "axios"

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([])

    const getPokemon = async () => {
        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${props.num}`
        )
        console.log(res.data)
        setPokemon(res.data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    const pokemonDisplay = pokemon.map(poke => (
        <p key={poke.name}>{poke.name}</p>
    ))

    return <div>{pokemonDisplay}</div>
}

export default Pokemon
