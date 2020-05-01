import React, { useState, useEffect, useRef } from 'react'
import NavbarData from '../db/navbar';
import { v4 as uuidv4 } from 'uuid';
import Search from '../search/Search';

const Navbar = () => {

  const buildMenu = subMenuList => {
    return subMenuList.map(subMenu => {
      return (
        <li key={uuidv4()} className='dropdown-item'><a href='#'>{subMenu}</a></li>
      )
    })
  };

  console.log('NavbarData', NavbarData);
  return (
    <ul className='main-menu-list'>
      {
        NavbarData.map(el => {
          let subMenu;
          if (el.hasSubMenu) {
            subMenu = buildMenu(el.subMenuList);
          }
          return (
            <li key={uuidv4()} className='main-menu-item' key={uuidv4()}>
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
      <Search />
    </ul>
  )
}

export default Navbar
