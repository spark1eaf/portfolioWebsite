import * as Constants from '../constants/constants';
import { Link } from 'react-router-dom';

const NavBtns = ({className, navRefs}) =>{
    
    
    const navigateAbout = () =>{
        navRefs.aboutRef.current.scrollIntoView({behavior: 'smooth'});
    } 

    const navigateContact = () =>{
        navRefs.contactRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const promptResumeDownload = () =>{
        if(window.confirm("Are you sure you want to download this file?")){
            fetch("src/assets/files/Scott_Hebert_Resume.pdf").then(response =>{
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download="Scott_Hebert_Resume.pdf";
                    alink.click();
                })
            })
        }
    }

    return(
        <div className= {className}>
            <button onClick={navigateAbout}>About</button>
            <button onClick={promptResumeDownload}>Resume</button>
            <Link to={Constants.PROJECTS_PAGE}><button>Projects</button></Link>
            <a href={Constants.GITHUB_LINK} target='_blank'><button>Github</button></a>
            <a href={Constants.LINKEDIN_LINK} target='_blank'><button>Linkedin</button></a>
            <button onClick={navigateContact}>Contact</button>
        </div>
    )
}

export default NavBtns;