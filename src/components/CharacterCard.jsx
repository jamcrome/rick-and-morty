import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

function CharacterCard({ ind, setFavorites, favorites }) {
  const navigate = useNavigate();
  
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={ind.image} />
      <Card.Body>
        <Card.Title>{ind.name}</Card.Title>
        
        <Button variant="primary" onClick={()=>navigate(`/character-details/${ind.id}`)}>More Info</Button>
        <Button variant="warning" onClick={()=>setFavorites([...favorites, ind])}>Add to Favorites</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;