import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SectionTitle from "./components/SectionTitle"
import Contact from "./components/Contact"
import "@fontsource/roboto-mono";
import * as Constants from './constants/constants'
import Intro from "./components/Intro";
import Body from "./components/Body";
import { useRef } from "react";


const App = () =>{
  const navRefs = {
    aboutRef: useRef(null),
    contactRef: useRef(null)
  };

  return(
    <div className="home-page">
      <NavBar navRefs={navRefs} />
      <Intro/>
      <SectionTitle ref={navRefs.aboutRef} className={Constants.GENERIC_TITLE_CLASS} title={Constants.ABOUT_TITLE}/>
      <Body className={Constants.GENERIC_BODY_CLASS} text={Constants.ABOUT_BODY}/>
      <Contact ref={navRefs.contactRef}/>
      <Footer/>
    </div>
  )
}

export default App
