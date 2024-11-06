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
      <h1>Character Search Page</h1>
      <div className="flex flex-wrap gap-4">
        {characters.map((character) =>(
          <CharacterCard 
            key={character.id} 
            ind={character} 
            addToFavorites={addToFavorites}/>
        ))}
        <button onClick={updatePageNum}>
          Next Page
        </button>
      </div>
    </>
  )
}

export default CharacterSearch