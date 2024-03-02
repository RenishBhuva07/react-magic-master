
import { useEffect, useState } from "react";
import SignUpUI from "./SignUpUI"
import { USER_DETAILS } from "../../Utilities/Data/PrefKeys";

const SignUp = () => {

    const [firstName, setFirstName] = useState(''),
        [isLogin, setIsLogin] = useState(false),
        [lastName, setLastName] = useState(''),
        [userName, setUserName] = useState(''),
        [password, setPassword] = useState(''),
        [userDetails, setUserDetails] = useState([]);

    useEffect(() => { //Did Mount
        if (isLogin) {
            initialization();
        }
    }, [])

    const initialization = () => {
        let userDetailsFromStorage: any = localStorage.getItem(USER_DETAILS);
        console.log("initialization_______----=======>>>", userDetailsFromStorage);
        if (userDetails !== null) {
            setUserDetails(JSON.parse(userDetailsFromStorage));
        } else {
            setUserDetails([]);
        }
    };

    const handleSignUp = () => {
        if (firstName && lastName && userName && password) {
            let userData = {
                first_name: firstName,
                last_name: lastName,
                user_name: userName,
                password: password
            };
            console.log("handleSignUp_______----=======>>>", userData);
            let newUserDetails = JSON.stringify([...userDetails, userData]);
            // console.log("newUserDetails_______----=======>>>", newUserDetails);
            localStorage.setItem(USER_DETAILS, newUserDetails);

            setFirstName('');
            setLastName('');
            setUserName('');
            setPassword('');

        } else {
            console.error("Please Enter Valid Details")
        }
    };

    const LoginSignUpToggleChange = () => {
        setIsLogin(!isLogin)
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
