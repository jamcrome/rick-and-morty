import NotFoundPage from "./pages/NotFoundPage.jsx"
import CharacterSearch from "./pages/CharacterSearchPage.jsx"
import HomePage from "./pages/HomePage"
import App from "./App.jsx"
import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import CharacterDetails from "./pages/CharacterDetailsPage.jsx"
import FavCharactersPage from "./pages/FavCharactersPage.jsx"

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element:<HomePage />
      },
      {
        path: "about/",
        element: <AboutPage />        
      },
      {
        path: "character-search/",
        element: <CharacterSearch />        
      },
      {
        path: "character-details/:id/",
        element: <CharacterDetails />        
      },
      {
        path: "favorite-characters/",
        element: <FavCharactersPage />        
      },
      {
        path: "*",
        element:<NotFoundPage />
      }
    ],
    errorElement: <ErrorPage />
  }
])

export default router