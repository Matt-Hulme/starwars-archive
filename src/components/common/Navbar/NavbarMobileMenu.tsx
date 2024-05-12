import { IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarMobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex flex-row h-16 items-center justify-between px-4 pt-4 w-full md:hidden">
      <Link to="/">
        <img
          src="src/assets/images/SW_Logo.png"
          className="h-12 object-cover"
        />
      </Link>
      <IconButton
        component="button"
        size="large"
        edge="start"
        style={{ color: '#ffbe00' }}
        onClick={handleClick} // Add the handleClick function here
      >
        <MenuIcon />
      </IconButton>
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
