import NavBtns from './NavBtns';
import * as Constants from'../constants/constants';
import {NavRefs} from "./ComponentTypes"

const DesktopNav = ({navRefs}: {navRefs:NavRefs}) =>{
    return(
        <nav className= "nav-bar">
            <NavBtns navRefs={navRefs} className={Constants.NAV_BTNS_CLASS}/>
        </nav>
    );
};

export default DesktopNav;