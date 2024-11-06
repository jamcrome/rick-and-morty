import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function CharacterDetails() {
  
  const [selected, setSelected] = useState(null)
  const { id } = useParams();

  const getCharacterInfo = async() => {
    let { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    setSelected(data)
  }

  useEffect(() => {
    getCharacterInfo();
  }, [])

  return (
    <>
     {selected ? (
      <>
        <h1>{selected.name}</h1>
        <img src={selected.image}/>
        <ul>
          <li>Species: {selected.species}</li>
          <li>Origin: {selected.origin.name}</li>
          <li>Location: {selected.location.name}</li>
          <li>Status: {selected.status}</li>
        </ul>
      </>
     ) : null}
     
     
    </>
  )
}

export default CharacterDetails