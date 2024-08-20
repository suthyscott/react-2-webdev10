import './App.css'
import Die from './Die'
import MovieList from './MovieList'
import MissingKey from './MissingKey'
import BrokenCounter from './BrokenCounter'
import Pokemon from './Pokemon'

function App() {

  return (
    <div>
      <h1>This is App.jsx</h1>
      <Pokemon num={20}/>
      <br/>
      <BrokenCounter/>
      <br/>
      <MissingKey/>
      <br/>
      <MovieList/>
      <br/>
      <Die sides={4}/>
      <Die sides={6}/>
      <Die sides={8}/>
      <Die sides={10}/>
      <Die sides={10}/>
      <Die sides={12}/>
      <Die sides={20}/>
    </div>
  )
}

export default App
