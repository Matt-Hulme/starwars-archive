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

  return (
    <nav className="bg-black fixed h-16 px-20 w-full z-10">
      {location.pathname !== '/' && (
        <div className=" absolute left-2 top-[12px]">
          <Button
            className="duration-800 ease-linear opacity-80 transition-all hover:opacity-100"
            onClick={onClick}
            size="large"
            startIcon={<ArrowBack />}
            sx={{ color: '#FFBE00B3' }}
          ></Button>
        </div>
      )}
      <div className="grid-cols-7 hidden md:grid">
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
        <div className="pt-1">
          <Link
            to="/"
            className="col-span-1 duration-800 ease-linear flex items-center justify-center opacity-60 transition-all hover:opacity-100"
          >
            <img
              src="/assets/images/SW_Logo.png"
              className="h-14 object-contain"
            />
          </Link>
        </div>
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
}
