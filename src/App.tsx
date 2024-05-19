import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Home } from './components/Home'
import { Navbar } from './components/common'
import { CharacterDetails, CharactersList } from './components/Characters'
import { FilmDetails, FilmsList } from './components/Films'
import { PlanetDetails, PlanetsList } from './components/Planets'
import { SpeciesDetails, SpeciesList } from './components/Species'
import { StarshipDetails, StarshipsList } from './components/Starships'
import { VehicleDetails, VehiclesList } from './components/Vehicles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/films" element={<FilmsList />} />
          <Route path="/films/:id" element={<FilmDetails />} />
          <Route path="/planets" element={<PlanetsList />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
          <Route path="/species" element={<SpeciesList />} />
          <Route path="/species/:id" element={<SpeciesDetails />} />
          <Route path="/starships" element={<StarshipsList />} />
          <Route path="/starships/:id" element={<StarshipDetails />} />
          <Route path="/vehicles" element={<VehiclesList />} />a
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
