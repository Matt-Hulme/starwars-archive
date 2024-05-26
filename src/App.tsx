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
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersList />} />
            <Route path="/characters/:name" element={<CharacterDetails />} />
            <Route path="/films" element={<FilmsList />} />
            <Route path="/films/:name" element={<FilmDetails />} />
            <Route path="/planets" element={<PlanetsList />} />
            <Route path="/planets/:name" element={<PlanetDetails />} />
            <Route path="/species" element={<SpeciesList />} />
            <Route path="/species/:name" element={<SpeciesDetails />} />
            <Route path="/starships" element={<StarshipsList />} />
            <Route path="/starships/:name" element={<StarshipDetails />} />
            <Route path="/vehicles" element={<VehiclesList />} />a
            <Route path="/vehicles/:name" element={<VehicleDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
