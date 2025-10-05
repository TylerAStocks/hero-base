
import { FC, useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import './NavItem.css';

interface NavItem {
    path?: string
    name?: string
}


const NavItem: React.FC<NavItem> = ({path, name}) => {


    const [activePath, setActivePath] = useState('/')

    useEffect(() => {
        setActivePath(window.location.pathname)
        console.log('path changed')
    }, [window.location.pathname])

    return (
        <li >
            <NavLink className="nav-item"  to={path || "/"} >
                <p>{name}</p>
            </NavLink>
        </li>
    )
}

export default NavItem;