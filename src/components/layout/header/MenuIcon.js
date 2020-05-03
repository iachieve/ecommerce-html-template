import React, { useContext } from 'react'
import { HeaderContext } from './HeaderContext';

function MenuIcon() {
    const {ToggleMenu} = useContext(HeaderContext);

  return (
    <div>
      <input
          onChange={() => ToggleMenu()}
          className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
    </div>
  )
}

export default MenuIcon
