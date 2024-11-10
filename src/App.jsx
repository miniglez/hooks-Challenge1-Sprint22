import './App.css';
import useFetch from './hooks/useFecthCharacters';
import FindInfoCharacters from './components/FindInfoCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  const urlRick = 'https://rickandmortyapi.com/api/character/';

  // const pokeFetch = useFetch(urlPokemon)
  // const rickFetch = useFetch(urlRick)
  
  return (
    <>
      <FindInfoCharacters url={urlPokemon} />
      <FindInfoCharacters url={urlRick} />

      {/* <div>
        <h2>Introduce el numero del pokemon</h2>
        <input 
          type="num" 
          value={pokeFetch.charNum} 
          onChange={(e) => pokeFetch.setCharNum(e.target.value)}
        />
        <p>{pokeFetch.info.name && pokeFetch.info.name}</p>
        <img src={pokeFetch.info.sprites && pokeFetch.info.sprites.front_default} alt={pokeFetch.info.name} />
      </div>
      <div>
      <h2>Introduce el numero de Rick y Morty</h2>
        <input 
          type="num" 
          value={rickFetch.charNum} 
          onChange={(e) => rickFetch.setCharNum(e.target.value)}
        />
        <p>{rickFetch.info.name && rickFetch.info.name}</p>
        <img src={rickFetch.info.image && rickFetch.info.image} alt={rickFetch.info.name} />
      </div> */}
    </>
  );
}

export default App;
