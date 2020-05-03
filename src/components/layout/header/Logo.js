import React from 'react'
import MenuIcon from "./MenuIcon";
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <div className='logo'>
        <MenuIcon />
        <Link to='/' className='logo-text'>
            Watches E-boutique
        </Link>


    </div>
  )
}

export default Logo
