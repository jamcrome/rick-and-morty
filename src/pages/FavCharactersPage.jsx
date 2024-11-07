import { useOutletContext } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"

const FavCharactersPage = () => {

  const { favorites, setFavorites } = useOutletContext()

  

  return (
    <>
      <h2 className="text-center">Favorite Characters Page</h2>
      <div className="flex flex-wrap gap-4 p-4 text-center">
        {favorites ? (favorites.map((character)=>(
          <CharacterCard 
            key={character.id} 
            ind={character} 
            setFavorites={setFavorites} 
            favorites={favorites}/>
          ))) : 
          (<h3 className="center">
            No Character Selected
          </h3>)
        }
      </div>
    </>
  )
}

export default FavCharactersPage