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
            <Route element={<Home />} path="/" />
            <Route element={<CharactersList />} path="/characters" />
            <Route element={<CharacterDetails />} path="/characters/:name" />
            <Route element={<FilmsList />} path="/films" />
            <Route element={<FilmDetails />} path="/films/:name" />
            <Route element={<PlanetsList />} path="/planets" />
            <Route element={<PlanetDetails />} path="/planets/:name" />
            <Route element={<SpeciesList />} path="/species" />
            <Route element={<SpeciesDetails />} path="/species/:name" />
            <Route element={<StarshipsList />} path="/starships" />
            <Route element={<StarshipDetails />} path="/starships/:name" />
            <Route element={<VehiclesList />} path="/vehicles" />a
            <Route element={<VehicleDetails />} path="/vehicles/:name" />
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
