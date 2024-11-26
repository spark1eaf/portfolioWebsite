import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import NavBtns from "./NavBtns";
import * as Constants from '../constants/constants';
import {NavRefs} from "./ComponentTypes"

const MobileNav = ({navRefs}: {navRefs:NavRefs}) =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuClass = isMenuOpen ? "menu visible" : "menu hidden";

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    };

 
    useEffect(() => {
        const handlePageClick = (event:MouseEvent) => {
          if (isMenuOpen && !(event.target as HTMLElement).closest('.hamburger-react'))
            toggleMenu();
        };
  
        document.addEventListener('click', handlePageClick);
    
        return () => {
          document.removeEventListener('click', handlePageClick);
        };
      }, [isMenuOpen]);    

    return(
        <nav className= "mobile-nav-bar">
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu}/>
            <div className={menuClass}>
                <NavBtns navRefs={navRefs} className={Constants.MOBILE_NAV_CLASS}/>
            </div>
        </nav>
    )
}

export default MobileNav;