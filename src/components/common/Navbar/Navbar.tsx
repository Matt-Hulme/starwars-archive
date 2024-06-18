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
    <nav className="fixed pl-20 pr-[10px] first-letter:lg:px-20 w-[100vw] lg:w-full z-50">
      {location.pathname !== '/' && (
        <div className="absolute left-2 top-[18px]">
          <Button
            className="brightness-50 duration-800 ease-linear transition-all hover:!brightness-100"
            size="large"
            startIcon={<ArrowBack />}
            sx={{ color: '#FFBE00B3' }}
            onClick={onClick}
          ></Button>
        </div>
      )}
      <div className="grid-cols-7 hidden md:grid">
        <Link
          className="brightness-50 col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all hover:!brightness-100"
          to="/characters"
        >
        <Typography className="hidden lg:block" variant="h6">
            Characters
          </Typography>
          <Typography className="block lg:hidden">Characters</Typography>
        </Link>
        <Link
          className="brightness-50 col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all hover:!brightness-100"
          to="/films"
        >
          <Typography className="hidden lg:block" variant="h6">
            Films
          </Typography>
          <Typography className="block lg:hidden">Films</Typography>
        </Link>
        <Link
          className="brightness-50 col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all hover:!brightness-100"
          to="/planets"
        >
          <Typography className="hidden lg:block" variant="h6">
            Planets
          </Typography>
          <Typography className="block lg:hidden">Planets</Typography>
        </Link>
        <div className="py-2">
          <Link
            className="brightness-50 col-span-1 duration-800 ease-linear flex items-center justify-center transition-all hover:!brightness-100"
            to="/"
          >
            <img
              className="h-14 object-contain"
              src="/assets/images/SW_Logo.png"
            />
          </Link>
        </div>
        <Link
          className="brightness-50 col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all hover:!brightness-100"
          to="/species"
        >
          <Typography className="hidden lg:block" variant="h6">
            Species
          </Typography>
          <Typography className="block lg:hidden">Species</Typography>
        </Link>
        <Link
          className="brightness-50 col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all hover:!brightness-100"
          to="/starships"
        >
          <Typography className="hidden lg:block" variant="h6">
            Starships
          </Typography>
          <Typography className="block lg:hidden">Starships</Typography>
        </Link>
        <Link
          className="brightness-50 col-span-1 duration-800 ease-linear flex items-center justify-center text-[#ffbe00] transition-all hover:!brightness-100"
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
