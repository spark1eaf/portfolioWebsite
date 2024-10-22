import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import * as Constants from "./constants/constants";

const App = () =>{

  return(
    <Router>
      <Routes>
        <Route path={Constants.HOME_PAGE} element={<HomePage/>} />
        <Route path={Constants.PROJECTS_PAGE} element={<Projects/>} />
      </Routes>
    </Router>
  )
}

export default App;
