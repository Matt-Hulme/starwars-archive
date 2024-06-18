import { IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const NavbarMobileMenu = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex flex-row h-18 items-center justify-between px-4 py-2 md:hidden">
      <img className="h-14 object-cover cursor-pointer"
        src="/assets/images/SW_Logo.png"
        onClick={() => navigate('/')}
      />
      <IconButton onClick={(event) => handleClick(event)}>
        <MenuIcon style={{color: '#ffbe00'}}
        />
      </IconButton>
      <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} onClose={handleClose}>
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
