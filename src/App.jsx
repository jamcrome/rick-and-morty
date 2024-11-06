import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import BackgroundImage from '/src/images/rick-and-morty-toilets-hd-wallpaper-preview.jpg';
import { useEffect, useState } from 'react';

function App() {
  
  const[favorites, setFavorites] = useState([])

  useEffect(() => {
    console.log(favorites)
  }, [favorites])

  return (
    <>
      <NavBar />
      <div style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}>
      <Outlet context={{favorites, setFavorites}}/>
      
      </div>
      
    </>
  )
}

export default App
