import Footer from "./Footer";
import SectionTitle from "./SectionTitle";
import Body from "./Body";
import * as Constants from "../constants/constants"
import { Link } from 'react-router-dom';

const Projects = () =>{

    document.title = `Projects`;   
    const handleReturn = () =>{
        document.title=`Welcome`;
    };

    return(
        <div className={`projects-page`}>
            <Link to={Constants.HOME_PAGE}><button onClick={handleReturn} className="return-btn">Back to Home</button></Link>
            <SectionTitle className={Constants.INTRO_TITLE_CLASS} title={Constants.PROJECTS_TITLE}/>
            <Body className={Constants.GENERIC_BODY_CLASS} text={Constants.PROJECTS_BODY}/>
            <Footer/>
        </div>
    );
};

export default Projects;