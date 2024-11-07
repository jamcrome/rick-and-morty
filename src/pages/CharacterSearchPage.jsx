import { useState, useEffect } from "react"
import axios from 'axios'
import CharacterCard from "../components/CharacterCard"
import { useOutletContext } from "react-router-dom"

function CharacterSearch() {

  const [characters, setCharacters] = useState([])
  const [pgnum, setPageNum] = useState(1)
  const { addToFavorites } = useOutletContext()

  const getCharacters = async() => {
    let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pgnum}`)
    setCharacters(response.data.results)
  }

  const updatePageNum = () => {  
    setPageNum(prevPageNumber => prevPageNumber + 1)
  }

  useEffect(() =>{
    getCharacters()
  }, [pgnum])

  return (
    <>
      <h1 className="text-center text-5xl pt-3">Character Search Page</h1>
      <div className="flex flex-wrap gap-4 p-4">
        {characters.map((character) =>(
          <CharacterCard 
            key={character.id} 
            ind={character} 
            addToFavorites={addToFavorites}/>
        ))}
      </div>
      <div className="flex justify-center pb-4 text-2xl">
        <button onClick={updatePageNum} className="rounded-full p-2.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300">
        Next Page
        </button>
      </div>
    </>
  )
}

export default CharacterSearch