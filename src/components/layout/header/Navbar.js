import React, { useContext} from 'react'
import NavbarData from './db/navbar';
import { v4 as uuidv4 } from 'uuid';
import {HeaderContext} from "./HeaderContext";
import {Link} from "react-router-dom";

const Navbar = () => {
  const {showMenu} = useContext(HeaderContext);

  const buildMenu = subMenuList => {
    return subMenuList.map(subMenu => {
      return (
        <li key={uuidv4()} className='dropdown-item'>
          <Link to={`/watches/${subMenu}`}>{subMenu}</Link>
        </li>
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
              <Link to={`/${el.link}`}>{el.title}</Link>
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
