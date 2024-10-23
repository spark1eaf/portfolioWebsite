import * as Constants from '../constants/constants';
import { Link } from 'react-router-dom';
import ResumePDF from '../assets/files/Scott_Hebert_Resume.pdf'

const NavBtns = ({className, navRefs}) =>{
    
    
    const navigateAbout = () =>{
        navRefs.aboutRef.current.scrollIntoView({behavior: 'smooth'});
    } 

    const navigateContact = () =>{
        navRefs.contactRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <div className= {className}>
            <button onClick={navigateAbout}>About</button>
            <a href={ResumePDF} target='_blank'><button>Resume</button></a>
            <Link to={Constants.PROJECTS_PAGE}><button>Projects</button></Link>
            <a href={Constants.GITHUB_LINK} target='_blank'><button>Github</button></a>
            <a href={Constants.LINKEDIN_LINK} target='_blank'><button>Linkedin</button></a>
            <button onClick={navigateContact}>Contact</button>
        </div>
    )
}

export default NavBtns;