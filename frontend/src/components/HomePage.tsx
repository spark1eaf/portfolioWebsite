import "@fontsource/roboto-mono";
import { useRef } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro"
import SectionTitle from "./SectionTitle";
import Body from "./Body";
import Contact from "./Contact";
import Footer from "./Footer";
import * as Constants from "../constants/constants";
import { NavRefs } from "./ComponentTypes";

const HomePage = () =>{

    const navRefs:NavRefs = {
        aboutRef: useRef<HTMLHeadingElement>(null),
        contactRef: useRef<HTMLHeadingElement>(null)
    }
    return(
      <div className="home-page">
        <NavBar navRefs={navRefs} />
        <Intro/>
        <SectionTitle ref={navRefs.aboutRef} className={Constants.GENERIC_TITLE_CLASS} title={Constants.ABOUT_TITLE}/>
        <Body className={Constants.GENERIC_BODY_CLASS} text={Constants.ABOUT_BODY}/>
        <Contact ref={navRefs.contactRef}/>
        <Footer/>
      </div>
    );
}

export default HomePage;