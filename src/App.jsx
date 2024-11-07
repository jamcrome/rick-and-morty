import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
// import BackgroundImage from '/src/images/rick-and-morty-toilets-hd-wallpaper-preview.jpg';
import { useState } from 'react';

function App() {
  
  const[favorites, setFavorites] = useState([])

  const addToFavorites = (character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      return;
    }
    setFavorites((prevFavorites) => [...prevFavorites, character])
  }

  return (
    <>
      <NavBar />
      <div className="bg-[url('/src/images/rick-and-morty-toilets-hd-wallpaper-preview.jpg')] bg-top bg-cover min-h-screen bg-fixed ">

      <Outlet context={{favorites, addToFavorites}}/>
      
      </div>
      
      {/* <div style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}>
      
      </div> */}
      
    </>
  )
}

export default App
