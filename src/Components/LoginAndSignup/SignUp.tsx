
import { useEffect, useState } from "react";
import SignUpUI from "./SignUpUI"
import { USER_DETAILS } from "../../Utilities/Data/PrefKeys";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../../Redux/actions/UserActions";

const SignUp = () => {

    const [firstName, setFirstName] = useState(''),
        [isLogin, setIsLogin] = useState(false),
        [lastName, setLastName] = useState(''),
        [userName, setUserName] = useState(''),
        [password, setPassword] = useState(''),
        [usrDetails, setUsrDetails] = useState([]),
        navigate = useNavigate();

    useEffect(() => { //Did Mount
        initialization();
    }, [])

    const initialization = () => {
        let userDetailsFromStorage: any = localStorage.getItem(USER_DETAILS);
        console.log("initialization_______----=======>>>", userDetailsFromStorage);

        if (usrDetails !== null) {
            const userDetailsFromLocalStorage = JSON.parse(userDetailsFromStorage);
            setUserDetails(userDetailsFromLocalStorage[0]); //redux
            setUsrDetails(userDetailsFromLocalStorage);
            setIsLogin(true);
        } else {
            setUsrDetails([]);
            setIsLogin(false);
        }
    };

    const handleSignUp = () => {
        if (firstName && lastName && userName && password && !isLogin) {
            let userData = {
                first_name: firstName,
                last_name: lastName,
                user_name: userName,
                password: password
            };
            let newUserDetails = usrDetails ? JSON.stringify([...usrDetails, userData]) : JSON.stringify([userData]);
            localStorage.setItem(USER_DETAILS, newUserDetails);

            setFirstName('');
            setLastName('');
            setUserName('');
            setPassword('');

        } else if (firstName && lastName && userName && password && isLogin) {
            let user_name: string = usrDetails[0]?.user_name,
                pass_word: string = usrDetails[0]?.password;
            if (userName !== user_name) {
                alert("You've enter Invalid User Name")
            } else if (password !== pass_word) {
                alert("You've enter Invalid Password")
            } else if (userName === user_name && password === pass_word) {
                navigate('/dashboard')
            }

        } else {
            alert("Please Enter Valid Details")
        }
    };

    const LoginSignUpToggleChange = () => {
        if (isLogin) {
            setIsLogin(!isLogin);
        } else if (!isLogin && usrDetails !== null) {
            setIsLogin(!isLogin);
            // console.log("Please_Enter________________", usrDetails);
        } else {
            alert("Please Sign Up First!")
        }
    };

    const handleFirstName = (value: any) => {
        // console.log("handleFirstName_______----=======>>>", value);
        setFirstName(value);
    };
    const handleLastName = (value: any) => {
        // console.log("handleLastName_______----=======>>>", value);
        setLastName(value);
    };
    const handleUserName = (value: any) => {
        // console.log("handleUserName_______----=======>>>", value);
        setUserName(value);
    };
    const handlePassword = (value: any) => {
        // console.log("handlePassword_______----=======>>>", value);
        setPassword(value);
    };

    return (
        <SignUpUI
            firstName={firstName}
            lastName={lastName}
            userName={userName}
            password={password}
            isLogin={isLogin}
            handleFirstName={(value) => handleFirstName(value)}
            handleLastName={(value) => handleLastName(value)}
            handleUserName={(value) => handleUserName(value)}
            handlePassword={(value) => handlePassword(value)}
            handleSignUp={handleSignUp}
            LoginSignUpToggleChange={LoginSignUpToggleChange}
        />
    )
}

export default SignUp
