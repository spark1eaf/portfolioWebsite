import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = ({navRefs}) =>{

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [scrollPos, setScrollPos] = useState(0);
    
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

    useEffect(() => {
        const handleScrollChange = () =>{
            setScrollPos(window.scrollY);
        }
    
        window.addEventListener("scroll", handleScrollChange);
            
        return () => {
            window.addEventListener("scroll", handleScrollChange);
        };
        
    }, [scrollPos]);

    const goToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    let scrollButton;

    if(scrollPos > 50)
        scrollButton = <button className={"scroll-top"} onClick={goToTop}>Scroll to top</button>


    if(windowSize.width >=775){
        return (
            <>
                <DesktopNav navRefs={navRefs}/>
                {scrollButton}
            </>
        )
    }
    else
        return(
            <>
                <MobileNav navRefs={navRefs}/>
                {scrollButton}
            </>
        )
}

export default NavBar;