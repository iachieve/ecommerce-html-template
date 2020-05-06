import React, { useContext} from 'react'
import NavbarData from './db/navbar';
import { v4 as uuidv4 } from 'uuid';
import {HeaderContext} from "./HeaderContext";

const Navbar = () => {
  const {showMenu} = useContext(HeaderContext);

  const buildMenu = subMenuList => {
    return subMenuList.map(subMenu => {
      return (
        <li key={uuidv4()} className='dropdown-item'><a href='#'>{subMenu}</a></li>
      )
    })
  };

  return (
    <ul className={showMenu ? 'main-menu-list show-main-menu-item': 'main-menu-list'}>
      {
        NavbarData.map(el => {
          let subMenu;
          if (el.hasSubMenu) {
            subMenu = buildMenu(el.subMenuList);
          }
          return (
            <li key={uuidv4()} className='main-menu-item'>
              <a href='#'>{el.title}</a>
              {
                el.hasSubMenu &&
                <ul key={uuidv4()} className='dropdown'>
                  {subMenu}
                </ul>
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Navbar
