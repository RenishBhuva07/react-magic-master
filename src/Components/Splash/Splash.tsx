import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomAnimation } from '../../CommonComponents/CustomAnimation/CustomAnimation';
import { ANIMATIONS } from '../../Utilities/Animations';

const Splash = () => {

    const navigate = useNavigate();

    useEffect(() => { //Did Mount
        setTimeout(() => {
            navigateToSignUp();
        }, 4000);
    }, [])

    const navigateToSignUp = () => {
        // navigate('/login-signup');
        navigate('/dashboard');
    }


    return (
        <div className="splash-container d-flex flex-column justify-content-center align-items-center" data-component='SignUp'>
            <CustomAnimation animationFile={ANIMATIONS.React} animationStyle={{ width: "70%", height: "70%", }} />
            {/* <img src={IMAGES.reactLogo} className="logo react" alt="React logo" /> */}
            <h2 className='h2_title_aqua'>Renish Welcomes You ...</h2>
        </div>
    )
}

export default Splash
