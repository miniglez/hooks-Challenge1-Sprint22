import useFetch from '../hooks/useFecthCharacters';


const FindInfoCharacters = ({url}) => {
    const {charNum, setCharNum, info, imageUrl} = useFetch(url)
    

    return (
    <div>
        <h2>Introduce el numero del pokemon</h2>
        <input 
          type="num" 
          value={charNum} 
          onChange={(e) => setCharNum(e.target.value)}
        />
        <p>{info.name && info.name}</p>
        <img src={imageUrl && imageUrl} alt={info.name} />
      </div>
    )
}

export default FindInfoCharacters