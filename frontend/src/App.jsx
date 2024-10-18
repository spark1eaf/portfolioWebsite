import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SectionTitle from "./components/SectionTitle"
import Body from "./components/Body"
import Contact from "./components/Contact"
import "@fontsource/roboto-mono";
import * as Constants from './constants/constants'

const App = () =>{

  return(
    <div className="home-page">
      <NavBar/>
      <SectionTitle className={Constants.INTRO_TITLE_CLASS} title={Constants.INTRO_TITLE}/>
      <Body className={Constants.GENERIC_BODY_CLASS} text={Constants.INTRO_BODY}/>
      <SectionTitle className={Constants.GENERIC_TITLE_CLASS} title={Constants.ABOUT_TITLE}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
