
import { NavLink } from "react-router-dom";
import './NavItem.css';

interface NavItemType {
    path?: string
    name?: string
}


const NavItem: React.FC<NavItemType> = ({path, name}) => {


    return (
        <li >
            <NavLink className="nav-item"  to={path || "/"} >
                <p>{name}</p>
            </NavLink>
        </li>
    )
}

export default NavItem;