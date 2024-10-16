import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Title from "./components/Title"
import Body from "./components/Body"
import Contact from "./components/Contact"
import "@fontsource/roboto-mono";

const App = () =>{
  return(
    <div className="home-page">
      <NavBar/>
      <Title/>
      <Body/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
