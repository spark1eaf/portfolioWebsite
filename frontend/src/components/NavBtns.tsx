import * as Constants from '../constants/constants';
import { Link } from 'react-router-dom';
import ResumePDF from '../assets/files/Scott_Hebert_Resume.pdf'
import {NavRefs} from "./ComponentTypes"

interface Props{
    className:string,
    navRefs:NavRefs;
}

const NavBtns = ({className, navRefs}:Props) =>{
    
    const navigateAbout = () =>{
        if(navRefs.aboutRef.current !== null)
            navRefs.aboutRef.current.scrollIntoView({behavior: 'smooth'});
    };

    const navigateContact = () =>{
        if(navRefs.contactRef.current !== null)
            navRefs.contactRef.current.scrollIntoView({behavior: 'smooth'});
    };

    return(
        <div className= {className}>
            <button onClick={navigateAbout}>About</button>
            <a href={ResumePDF} target='_blank'><button>Resume</button></a>
            <Link to={Constants.PROJECTS_PAGE}><button>Projects</button></Link>
            <a href={Constants.GITHUB_LINK} target='_blank' rel='noopener noreferrer'><button>Github</button></a>
            <a href={Constants.LINKEDIN_LINK} target='_blank' rel='noopener noreferrer'><button>Linkedin</button></a>
            <button onClick={navigateContact}>Contact</button>
        </div>
    );
};

export default NavBtns;