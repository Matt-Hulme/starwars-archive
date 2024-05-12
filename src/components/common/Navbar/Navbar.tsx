import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { NavbarMobileMenu } from './NavbarMobileMenu'

export const Navbar = () => (
  <nav className="fixed flex flex-row h-16 items-center justify-center w-full">
    <div className="grid-cols-7 hidden w-full pt-1 md:grid">
      <Link
        to="/characters"
        className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 text-[#ffbe00] transition-all hover:opacity-100"
      >
        <Typography variant="h6" className="hidden lg:block">
          Characters
        </Typography>
        <Typography className="block lg:hidden">Characters</Typography>
      </Link>
      <Link
        to="/films"
        className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 text-[#ffbe00] transition-all hover:opacity-100"
      >
        <Typography variant="h6" className="hidden lg:block">
          Films
        </Typography>
        <Typography className="block lg:hidden">Films</Typography>
      </Link>
      <Link
        to="/planets"
        className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 text-[#ffbe00] transition-all hover:opacity-100"
      >
        <Typography variant="h6" className="hidden lg:block">
          Planets
        </Typography>
        <Typography className="block lg:hidden">Planets</Typography>
      </Link>
      <Link
        to="/"
        className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 transition-all hover:opacity-100"
      >
        <img
          src="src/assets/images/SW_Logo.png"
          className="h-14 object-contain"
        />
      </Link>
      <Link
        to="/species"
        className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 text-[#ffbe00] transition-all hover:opacity-100"
      >
        <Typography variant="h6" className="hidden lg:block">
          Species
        </Typography>
        <Typography className="block lg:hidden">Species</Typography>
      </Link>
      <Link
        to="/starships"
        className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 text-[#ffbe00] transition-all hover:opacity-100"
      >
        <Typography variant="h6" className="hidden lg:block">
          Starships
        </Typography>
        <Typography className="block lg:hidden">Starships</Typography>
      </Link>
      <Link
        to="/vehicles"
        className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 text-[#ffbe00] transition-all hover:opacity-100"
      >
        <Typography variant="h6" className="hidden lg:block">
          Vehicles
        </Typography>
        <Typography className="block lg:hidden">Vehicles</Typography>
      </Link>
    </div>
    <NavbarMobileMenu />
  </nav>
)
