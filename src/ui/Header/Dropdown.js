import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from './Header.module.css'
const Dropdown = ({ submenus, parent }) => {
    console.log(submenus)
    return (
        <ul className={HeaderStyles.subMenuLists}>
            {submenus.map((submenu , index) => (
                <li key={index} className={HeaderStyles.liStyle}>
                    <NavLink className={HeaderStyles.subMenuList} to={parent+"/"+submenu.url}>{submenu.title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default Dropdown;
