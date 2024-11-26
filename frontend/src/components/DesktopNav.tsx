import NavBtns from './NavBtns';
import * as Constants from'../constants/constants';
import {NavRefs} from "./ComponentTypes"


const DesktopNav = ({navRefs}: {navRefs:NavRefs}) =>{
    return(
        <div className= "nav-bar">
            <NavBtns navRefs={navRefs} className={Constants.NAV_BTNS_CLASS}/>
        </div>
    )
}

export default DesktopNav;