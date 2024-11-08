import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

function CharacterCard({ ind, addToFavorites }) {

  const navigate = useNavigate();

  const handleFavorite = () => {
    addToFavorites(ind)
  }

  return (
    <Card className="p-2 bg-neutral-300" style={{ width: '12rem' }}>
      <Card.Img className="pb-2 rounded-md" variant="top" src={ind.image} />
      <Card.Body className="flex flex-col p-1 justify-between">
        <Card.Title className='text-center'>{ind.name}</Card.Title>
        <div className="flex flex-col">
          <Button variant="primary" onClick={()=>navigate(`/character-details/${ind.id}`)}>More Info</Button>
          <Button variant="warning" onClick={()=>handleFavorite()}>Add to Favorites</Button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;