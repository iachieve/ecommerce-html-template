import React, { useState, useEffect, useRef } from 'react'
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import './header.scss';

const Header = () => {

  return (
    <nav className='nav' >
      <Logo />
      <Navbar />
    </nav>
  )
}

export default Header
