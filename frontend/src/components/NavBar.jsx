import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () =>{

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    console.log(windowSize)
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
    
        window.addEventListener("resize", handleResize);
            
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        
    }, [windowSize]);


    if(windowSize.width >=761)
        return <DesktopNav/>
    else
        return <MobileNav/>
}

export default NavBar;