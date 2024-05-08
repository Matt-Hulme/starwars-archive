import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/common'
import theme from './theme'
import { ThemeProvider } from '@emotion/react'
// import other pages here

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  )
}

export default App