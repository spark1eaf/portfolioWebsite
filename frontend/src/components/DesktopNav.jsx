import NavBtns from './NavBtns';
import * as Constants from'../constants/constants'

const DesktopNav = () =>{
    return(
        <div className= "nav-bar">
            <NavBtns className={Constants.NAV_CLASS}/>
        </div>
    )
}

export default DesktopNav;