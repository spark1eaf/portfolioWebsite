import * as Constants from '../constants/constants';
import photo from '../images/photo.jpg';
import SectionTitle from './SectionTitle';
import Body from './Body';

const Intro = () =>{
    return(
        <>
            <SectionTitle className={Constants.INTRO_TITLE_CLASS} title={Constants.INTRO_TITLE} />
            <div className='intro'>
                <img className="photo-self" src={photo} alt="selfie" />
                <Body className={Constants.GENERIC_BODY_CLASS} text={Constants.INTRO_BODY} />
            </div>
        </>
    );
}

export default Intro;