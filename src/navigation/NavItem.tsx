
import { FC } from "react";
import { Outlet, Link } from "react-router-dom";

interface NavItem {
    path?: string
    name?: string
}


const NavItem: React.FC<NavItem> = ({path, name}) => {

    const pathname = path
    return (
        <li>
            <Link to={path || "/"}>
                <p style={{textDecoration: pathname === path ? 'underline' : undefined}}>{name}</p>
            </Link>
        </li>
    )
}

export default NavItem;