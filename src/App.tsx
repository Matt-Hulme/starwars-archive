import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Home } from './components/Home'
import { CharactersList } from './components/Characters/CharactersList'
import { FilmsList } from './components/Films/FilmsList'
import { PlanetsList } from './components/Planets/PlanetsList'
import { SpeciesList } from './components/Species/SpeciesList'
import { StarshipsList } from './components/Starships/StarshipsList'
import { VehiclesList } from './components/Vehicles/VechiclesList'
import { Navbar } from './components/common'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/films" element={<FilmsList />} />
          <Route path="/planets" element={<PlanetsList />} />
          <Route path="/species" element={<SpeciesList />} />
          <Route path="/starships" element={<StarshipsList />} />
          <Route path="/vehicles" element={<VehiclesList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
