import * as Constants from '../constants/constants';

const NavBtns = ({className}) =>{

    return(
        <div className= {className}>
            <button>About</button>
            <button>Resume</button>
            <button>Projects</button>
            <a href={Constants.GITHUB_LINK}><button>Github</button></a>
            <a href={Constants.LINKEDIN_LINK}><button>Linkedin</button></a>
            <button>Contact</button>
        </div>
    )
}

export default NavBtns;