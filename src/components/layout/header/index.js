import React, { useState, useEffect, useRef } from 'react'
import Logo from './Logo';
import Navbar from './Navbar';
import './header.scss';
import MenuIcon from './MenuIcon';
import HeaderContextProvider from "./HeaderContext";
const Header = () => {

  return (
      <HeaderContextProvider>
          <nav className='nav' >
              <Logo />
              <Navbar />
              {/*<MenuIcon />*/}
          </nav>
      </HeaderContextProvider>
  )
}

export default Header
