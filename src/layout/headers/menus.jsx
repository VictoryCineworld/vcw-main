import Link from 'next/link';
import React from 'react';
// internal
import menu_data from '@data/menu-data';

const Menus = () => {
  return (
    <ul>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`${menu.active ? 'active has-dropdown' : ''} 
          ${menu.megaMenu ? 'has-dropdown has-mega-menu' : ''} 
          ${menu.hasDropdown ? 'has-dropdown' : ''}`}
        >
          {/* Ensure link is displayed unless it's a secondary dropdown */}
          {!menu.secondaryDropdown && (
            <Link href={menu.link}>
              {menu.title}
            </Link>
          )}

          {/* Render dropdown menus if they exist */}
          {menu.hasDropdown && menu.submenus && (
            <ul className="submenu">
              {menu.submenus.map((sub, i) => (
                <li key={`${menu.id}-${i}`}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}

          {/* Render mega menu if it exists */}
          {menu.mega_menus && (
            <ul className="mega-menu">
              {menu.mega_menus.map((mega, i) => (
                <li key={`${menu.id}-mega-${i}`}>
                  <Link href={mega.link} className="mega-menu-title">
                    {mega.title}
                  </Link>
                  {mega.submenus && (
                    <ul>
                      {mega.submenus.map((sub_mega, j) => (
                        <li key={`${menu.id}-mega-${i}-sub-${j}`}>
                          <Link href={sub_mega.link}>{sub_mega.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menus;
