import { NavLink } from "react-router-dom";

export default function SideNavigation() {
    return (
        <div className="side-nav-block">
            <nav className="side-nav">
         <NavLink className="side-nav-link" to="/dashboard">Dashboard</NavLink>
         <NavLink className="side-nav-link" to="/settings">Settings</NavLink>
         <NavLink className="side-nav-link" to="/logout">Logout</NavLink>
         </nav>
        </div>
    );
}