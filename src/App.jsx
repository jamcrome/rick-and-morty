
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import BackgroundImage from '/src/images/rick-and-morty-toilets-hd-wallpaper-preview.jpg';

function App() {
  
  return (
    <>
      <NavBar />
      <div style={{ 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover', // Adjust as needed
        // backgroundPosition: 'center', // Adjust as needed
        minHeight: '100vh' // Ensure the div covers the viewport
      }}>
      <Outlet />
      {/* Your content here */}
      </div>
      
    </>
  )
}

export default App
