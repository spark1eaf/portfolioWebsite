import { useState, useEffect} from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import {NavRefs} from "./ComponentTypes"
import { throttle } from "lodash";

const NavBar = ({navRefs}: {navRefs: NavRefs}) =>{

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [scrollPos, setScrollPos] = useState(0);
    
    useEffect(() => {
        const handleResize = throttle(() => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }, 100);
    
        window.addEventListener("resize", handleResize);
            
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        
    }, []);

    useEffect(() => {
        const handleScrollChange = throttle(() => {
            console.log("hit")
            setScrollPos(window.scrollY);
        }, 500); 

    
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

    const scrollButton = () =>{
        if(scrollPos > 50)
            return <button className={"scroll-top"} onClick={goToTop}>Scroll to top</button>;
    }

    const NavComponent = windowSize.width >=775 ? DesktopNav : MobileNav;
        
    return (
        <>
            <NavComponent navRefs={navRefs}/>
            {scrollButton()}
        </>
    )

}

export default NavBar;