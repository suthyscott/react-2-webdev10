import { useState } from "react"

const MovieList = () =>{
    const [movies, setMovies] = useState(['Alien', 'Predator', 'Alien vs Predator'])
    const [inputValue, setInputValue] = useState('')

    const moviesDisplay = movies.map((movie, index) => {
        return <p key={index}>{movie}</p>
    })

    const handleAddMovie = () => {
        setMovies([...movies, inputValue])
    }

    console.log('above the return', movies)
    return (
        <div>
            {moviesDisplay}

            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={handleAddMovie}>Add Movie</button>
            </div>
        </div>
    )
}

export default MovieList