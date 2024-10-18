import { Squash as Hamburger } from "hamburger-react"
import { useEffect, useState } from "react"

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
                <div className="menu-btns">
                    <button>About</button>
                    <button>Resume</button>
                    <button>Projects</button>
                    <button>Skills</button>
                    <a href="https://github.com/spark1eaf/"><button>Github</button></a>
                    <a href="https://www.linkedin.com/in/scott-hebert-9b1789240"><button>Linkedin</button></a>
                </div>
            </div>
        </div>
    )
}

export default MobileNav