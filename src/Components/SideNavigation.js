import { NavLink } from "react-router-dom";
import userImage from '../selfie_summers.jpg';
import altLogo from '../floatmellow-logo-alt.png';
import { HiMenuAlt2 } from "react-icons/hi";
import { useRef} from "react";
import './SideNavigation.css';
import mobileLogo from '../logotype_alt.png';
import {
    useWindowSize,
  } from '@react-hook/window-size';
import useScrollBlock from '../useScrollBlock';

export default function SideNavigation() {
const menuRef = useRef(null);
const [width] = useWindowSize({FPS: 60});

const [blockScroll, allowScroll] = useScrollBlock();


    function toggleMenu(){ 
        if(width <= 480){
        menuRef.current.style.transform="translateX(0)";
        blockScroll();
        }
        else {
            allowScroll(); 
        }
    }

    function closeMenu(){
        if(width <= 480){
          menuRef.current.style.transform="translateX(-999px)";
        }
        allowScroll();
        }

    return (
        <div className="side-nav-block">
            <img className="mobile-icon" src={mobileLogo} alt="mobile logo for floatmellow"/>
            <button className="menu-toggle" onClick={toggleMenu}>
                <HiMenuAlt2 fill="#000"/>
            </button>
            <div className="menu"ref={menuRef}>
            <button className="menu-toggle--close" onClick={closeMenu}>
                X
            </button>
            <div className="logo-icon"></div>
            <img className="user-image" src={userImage} alt="Carl Summers, author of FloatMellow and user"/>
            <nav className="side-nav">
         <NavLink className="side-nav-link" to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
         <NavLink className="side-nav-link" to="/settings" onClick={closeMenu}>Settings</NavLink>
         <NavLink className="side-nav-link" to="/logout" onClick={closeMenu}>Logout</NavLink>
         </nav>
         <img className="logo logo--sidenav" src={altLogo} alt="Floatmellow logo in white"/>
         </div>
        </div>
    );
}