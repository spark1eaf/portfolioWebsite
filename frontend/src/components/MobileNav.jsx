import { Squash as Hamburger } from "hamburger-react"
import { useEffect, useState } from "react"
import NavBtns from "./NavBtns";
import * as Constants from '../constants/constants'

const MobileNav = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuClass, setMenuClass] = useState("menu hidden");

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
        isMenuOpen ? setMenuClass("menu hidden") : setMenuClass("menu visible");
    };

 
    useEffect(() => {
        const handlePageClick = (event) => {
          if (isMenuOpen && !event.target.closest('.hamburger-react'))
            toggleMenu();
        };
  
        document.addEventListener('click', handlePageClick);
    
        return () => {
          document.removeEventListener('click', handlePageClick);
        };
      });    

    return(
        <div className= "mobile-nav-bar">
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu}/>
            <div className={menuClass}>
                <NavBtns className={Constants.MOBILE_NAV_CLASS}/>
            </div>
        </div>
    )
}

export default MobileNav