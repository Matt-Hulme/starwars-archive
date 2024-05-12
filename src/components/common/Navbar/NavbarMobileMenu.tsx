import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarMobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex flex-row h-16 items-center justify-center px-4 pt-1 w-full md:hidden">
      <img
        src="src/assets/images/SW_Logo.png"
        className="h-14 object-cover cursor-pointer"
        onClick={handleClick} // Add the handleClick function here
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Link to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/characters">
          <MenuItem onClick={handleClose}>Characters</MenuItem>
        </Link>
        <Link to="/films">
          <MenuItem onClick={handleClose}>Films</MenuItem>
        </Link>
        <Link to="/planets">
          <MenuItem onClick={handleClose}>Planets</MenuItem>
        </Link>
        <Link to="/species">
          <MenuItem onClick={handleClose}>Species</MenuItem>
        </Link>
        <Link to="/starships">
          <MenuItem onClick={handleClose}>Starships</MenuItem>
        </Link>
        <Link to="/vehicles">
          <MenuItem onClick={handleClose}>Vehicles</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
