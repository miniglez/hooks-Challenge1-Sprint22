import { useState, useEffect } from "react";
// const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
// const urlRick = 'https://rickandmortyapi.com/api/character/';


const useFetch = (url) => {
    const [charNum, setCharNum] = useState(1)
    const [info, setInfo] = useState({})
    const [imageUrl, setImageUrl] = useState(undefined) 


    const fetchData = async (urlFetch) => {
        try {
            const response = await fetch(urlFetch)
            // if (!response.ok){
            //     throw new Error (response.status)
            // }

            const data = await response.json()

            setInfo(data)

            if (urlFetch === ("https://pokeapi.co/api/v2/pokemon/" + charNum)){
                setImageUrl(data.sprites.front_default)
            }
            else setImageUrl(data.image)

        } catch (error) {
            console.error("Error")
        }
    }

    useEffect( () => {
        const newUrl = url + charNum
        fetchData(newUrl)
    }, [charNum])

    return {charNum, setCharNum, info, imageUrl}
}

export default useFetch

// export const useFetchPokemon = (charNum) => {
//     const [numPokemon, setNumPokemon] = useState(charNum || 1)
//     const [pokeInfo, setPokeInfo] = useState({})



//     useEffect(async () => {
//         try {
//             const response = await fetch(urlPokemon, numPokemon)
//             if (!response.ok){
//                 throw new Error (response.status)
//             }

//             const data = await response.json()

//             setPokeInfo(data)

//         } catch (error) {
//             console.error("Error");
//         }
//     }, [numPokemon])

//     return {
//         numPokemon, setNumPokemon, pokeInfo
//     }
// }

// export const useFetchRick = (charNum) => {
//     const [numPj, setNumPj] = useState(charNum || 1)
//     const [charInfo, setCharInfo] = useState({})

//     useEffect(async () => {
//         try {
//             const response = await fetch(urlRick, numPj)
//             if (!response.ok){
//                 throw new Error (response.status)
//             }

//             const data = await response.json()

//             setPokeInfo({name: data.results.name, image: data.results.image})

//         } catch (error) {
//             console.error("Error");
//         }
//     }, [numPokemon])

//     return {
//         numPj, setNumPj, pokeInfo
//     }
// }