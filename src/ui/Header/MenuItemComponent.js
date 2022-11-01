import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ContextClick } from '../../context/ContextClick';


export default function MenuItemComponent({ items }) {
    const [displayMenu, setdisplayMenu] = useState(-1)
    const [isClickedOutside, setclickedOutside] = useState(false)
    const subNavState = useContext(ContextClick)

    useEffect(() => {

    }, [subNavState.isClicked]);



    function onMouseOverHandler(index) {
        console.log(subNavState.isClicked)
        setdisplayMenu(index)
        setclickedOutside(true)
    }

    return (
        <ul>
            {items.map((menu, index) => {
                return (
                    <li className={styles.menuItem} key={index} onMouseOver={onMouseOverHandler.bind(null, index)}>
                        <NavLink to={menu.url} end
                            style={({ isActive }) => isActive ? { backgroundColor: '2874f0' } : { color: 'white' }}
                        >{menu.title}</NavLink>
                        {(menu?.submenu && (index == displayMenu && subNavState.isClicked)) && (
                            <>
                                <p>{subNavState.isClicked}</p>
                                <Dropdown submenus={menu.submenu} parent={menu.url} />
                            </>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
