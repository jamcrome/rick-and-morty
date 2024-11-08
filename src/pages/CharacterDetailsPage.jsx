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
        <div className="flex flex-row p-10">
          <div>
            <img src={selected.image} className="size-50 rounded-full"/>
            
          </div>
          <div className="flex flex-col p-14">
            <h1 className="text-4xl  py-2">{selected.name}</h1>
            <ul className="text-xl">
              <li>Species: {selected.species}</li>
              <li>Origin: {selected.origin.name}</li>
              <li>Location: {selected.location.name}</li>
              <li>Status: {selected.status}</li>
            </ul>
          </div>
          
        </div>
        
      </>
     ) : null}
     
     
    </>
  )
}

export default CharacterDetails