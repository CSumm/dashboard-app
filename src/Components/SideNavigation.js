import { NavLink } from "react-router-dom";
import userImage from '../selfie_summers.jpg';
import altLogo from '../floatmellow-logo-alt.png';

export default function SideNavigation() {
    return (
        <div className="side-nav-block">
            <div className="logo-icon"></div>
            <img className="user-image" src={userImage} alt="Carl Summers, author of FloatMellow and user"/>
            <nav className="side-nav">
         <NavLink className="side-nav-link" to="/dashboard">Dashboard</NavLink>
         <NavLink className="side-nav-link" to="/settings">Settings</NavLink>
         <NavLink className="side-nav-link" to="/logout">Logout</NavLink>
         </nav>
         <img className="logo logo--sidenav" src={altLogo} alt="Floatmellow logo in white"/>
        </div>
    );
}