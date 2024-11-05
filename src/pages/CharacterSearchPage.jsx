import { useState, useEffect } from "react"
import axios from 'axios'

function CharacterSearch() {

  const [characters, setCharacters] = useState([])

  const getCharacters = async() => {
    let response = await axios.get("https://rickandmortyapi.com/api/character/")
    setCharacters(response.data.results)
  }

  useEffect(() =>{
    getCharacters()
  }, [])

  const moveNextPage = (num) => {

  }

  return (
    <>
      <h1>Character Search Page</h1>
      <div className="flex flex-wrap gap-4">
      {characters.map((character) =>(
        <div id={character.id} className="">
          <img src={character.image} className="rounded-2xl"/>
          <p className="">{character.name}</p>
        </div>
        
      ))}
      <button onClick={moveNextPage(20)}>
        Next Page
      </button>
      </div>
      
    </>
  )

}

export default CharacterSearch