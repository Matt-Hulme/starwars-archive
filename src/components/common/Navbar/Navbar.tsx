import { Button, Typography } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NavbarMobileMenu } from './NavbarMobileMenu'
import { ArrowBack } from '@mui/icons-material'

export const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const onClick = () => {
    navigate(-1)
  }
   
  const isCharacters = location.pathname.includes('/characters')
  const isFilms = location.pathname.includes('/films')
  const isPlanets = location.pathname.includes('/planets')
  const isSpecies = location.pathname.includes('/species')
  const isStarships = location.pathname.includes('/starships')
  const isVehicles = location.pathname.includes('/vehicles')
  const isHome = location.pathname === '/'


  return (
    <nav className="bg-black fixed pl-20 pr-[10px] w-[100vw] z-50 lg:w-full first-letter:lg:px-20">
        <div className="absolute left-2 top-[18px]">
          <Button
            className="brightness-50 duration-800 ease-linear transition-all hover:!brightness-100"
            size="large"
            startIcon={<ArrowBack />}
            sx={{ color: '#FFBE00B3' }}
            onClick={onClick}
          />
        </div>
      <div className="grid-cols-7 hidden md:grid">
        <Link
          className={`col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all ${isCharacters ? '!brightness-100' : 'brightness-50'}`}
          to="/characters"
        >
        <Typography className="hidden lg:block" variant="h6">
            Characters
          </Typography>
          <Typography className="block lg:hidden">Characters</Typography>
        </Link>
        <Link
          className={`col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all ${isFilms ? '!brightness-100' : 'brightness-50'}`}
          to="/films"
        >
          <Typography className="hidden lg:block" variant="h6">
            Films
          </Typography>
          <Typography className="block lg:hidden">Films</Typography>
        </Link>
        <Link
          className={`col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all ${isPlanets ? '!brightness-100' : 'brightness-50'}`}
          to="/planets"
        >
          <Typography className="hidden lg:block" variant="h6">
            Planets
          </Typography>
          <Typography className="block lg:hidden">Planets</Typography>
        </Link>
        <div className="py-2">
          <Link
          className={`col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all ${isHome ? '!brightness-100' : 'brightness-50'}`}
            to="/"
          >
            <img
              alt='StarWars logo'
              className="h-14 object-contain"
              src="/assets/images/SW_Logo.png"
            />
          </Link>
        </div>
        <Link
          className={`col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all ${isSpecies ? '!brightness-100' : 'brightness-50'}`}
          to="/species"
        >
          <Typography className="hidden lg:block" variant="h6">
            Species
          </Typography>
          <Typography className="block lg:hidden">Species</Typography>
        </Link>
        <Link
          className={`col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all ${isStarships ? '!brightness-100' : 'brightness-50'}`}
          to="/starships"
        >
          <Typography className="hidden lg:block" variant="h6">
            Starships
          </Typography>
          <Typography className="block lg:hidden">Starships</Typography>
        </Link>
        <Link
          className={`col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all ${isVehicles ? '!brightness-100' : 'brightness-50'}`}
          to="/vehicles"
        >
          <Typography className="hidden lg:block" variant="h6">
            Vehicles
          </Typography>
          <Typography className="block lg:hidden">Vehicles</Typography>
        </Link>
      </div>
      <NavbarMobileMenu />
    </nav>
  )
}
