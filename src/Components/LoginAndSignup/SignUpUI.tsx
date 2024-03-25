import { useRef } from "react";
import CustomButton from "../../CommonComponents/CustomButton/CustomButton"
import TextInput from "../../CommonComponents/TextInput/TextInput"

interface ISignUpUIProps {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    isLogin: boolean;
    handleFirstName: (value: any) => void;
    handleLastName: (value: any) => void;
    handleUserName: (value: any) => void;
    handlePassword: (value: any) => void;
    handleSignUp: () => void;
    LoginSignUpToggleChange: () => void;
}

const SignUpUI = ({
    firstName,
    lastName,
    userName,
    password,
    isLogin,
    handleFirstName,
    handleLastName,
    handleUserName,
    handlePassword,
    handleSignUp,
    LoginSignUpToggleChange,
}: ISignUpUIProps) => {

    const fName = useRef(),
        lName = useRef(),
        uName = useRef(),
        paswrd = useRef();

    return (
        <div className="login-container d-flex align-items-center justify-content-center">
            <div className="form_wrapper">
                <div className="form_title_wrapper">
                    <h2 className="h2_title_aqua">{isLogin ? "Login" : "SignUp"}</h2>
                </div>
                <div className="form_content_wrapper">
                    <TextInput
                        reference={fName}
                        value={firstName}
                        type="text"
                        name="FirstName"
                        labelFor="FirstName"
                        labelText="First Name"
                        onChange={(value) => handleFirstName(value)}
                    />
                    <TextInput
                        reference={lName}
                        value={lastName}
                        type="text"
                        name="LastName"
                        labelFor="LastName"
                        labelText="Last Name"
                        onChange={(value) => handleLastName(value)}
                    />
                    <TextInput
                        reference={uName}
                        value={userName}
                        type="text"
                        name="UserName"
                        labelFor="UserName"
                        labelText="User Name"
                        onChange={(value) => handleUserName(value)}
                    />
                    <TextInput
                        reference={paswrd}
                        value={password}
                        type="password"
                        name="Password"
                        labelFor="Password"
                        labelText="Password"
                        onChange={(value) => handlePassword(value)}
                    />
                    {/* <input className="custom_button" type="submit" value={'Submit'} /> */}
                    <CustomButton
                        buttonText={isLogin ? "Login" : "SignUp"}
                        onClick={handleSignUp}
                        styleName={"custom_button"}
                    />
                    {!isLogin && <div className="d-flex align-items-center">
                        <p style={{ color: 'red', marginRight: 10 }}>{isLogin ? "Create a New Account ?" : "Already Registered ?"}</p>
                        <CustomButton
                            buttonText={isLogin ? "Sign Up" : "Login"}
                            onClick={LoginSignUpToggleChange}
                            styleName="loginToggleBtn"
                        />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default SignUpUI
