import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../Utilities/Images';

const Splash = () => {

    const navigate = useNavigate();

    useEffect(() => { //Did Mount
        setTimeout(() => {
            navigateToSignUp();
        }, 4000);
    }, [])

    const navigateToSignUp = () => {
        navigate('/login-signup')
    }


    return (
        <div className="splash-container d-flex flex-column justify-center align-center" data-component='SignUp'>
            <img src={IMAGES.reactLogo} className="logo react" alt="React logo" />
            <h2 className='h2_title_aqua'>Welcome  to the React Magic Master ..</h2>
        </div>
    )
}

export default Splash
