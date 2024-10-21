import NavBtns from './NavBtns';
import * as Constants from'../constants/constants'

const DesktopNav = ({navRefs}) =>{
    return(
        <div className= "nav-bar">
            <NavBtns navRefs={navRefs} className={Constants.NAV_CLASS}/>
        </div>
    )
}

export default DesktopNav;