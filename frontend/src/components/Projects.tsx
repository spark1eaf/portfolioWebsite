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
            <div className="projects">
                <div className="personal-site-div">
                    <p className="project-txt-one">{Constants.PERSONAL_SITE_TEXT_1}</p>
                    <Link to={Constants.PERSONAL_SITE}><button className="personal-site-btn">Personal Website</button></Link>
                    <p className="project-txt-two">{Constants.PERSONAL_SITE_TEXT_2}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Projects;