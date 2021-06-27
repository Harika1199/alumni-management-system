import { useState, useRef } from "react";
import Header from '../header';
import { useDispatch } from "react-redux";
import './login.css';

export default function UserLogin({ history }) {
    const emailRef = useRef("");
    const passwdRef = useRef("");
    const [emailError, setEmailError] = useState("");
    const [passwdError, setPasswsError] = useState("");

    const dispatch = useDispatch();

    // Validate Email Address
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    const formValidation = (refName) => {
        let errorCount = 0;
        switch (refName) {
            case 'all': {

            }
            case "emailRef": {

                if (!emailRef || !emailRef.current || !emailRef.current.value || (emailRef && emailRef.current.value.trim() === "")) {
                    setEmailError("Please Enter Email Address");
                    errorCount = errorCount + 1;
                } else if (!validateEmail(emailRef.current.value.trim())) {
                    setEmailError("Invalid Email ID");
                    errorCount = errorCount + 1;
                } else {
                    setEmailError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "passwdRef": {
                if (!passwdRef || !passwdRef.current || !passwdRef.current.value || (passwdRef && passwdRef.current.value.trim() === "")) {
                    setPasswsError("Please Enter Password");
                    errorCount = errorCount + 1;
                } else {
                    setPasswsError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            default: {
                break;
            }
        }

        return errorCount === 0 ? true : false;


    }

    const handleSubmit = () => {
        if (formValidation('all')) {
            dispatch({ type: "USER_LOGIN", payLoad: true });
            console.log("All fields are validated");
            history.push("/")
        }
    }

    return (
        <>
            <Header />
            <div className="full-screen">

                <div className="imgcontainer">
                    <h3>Login</h3>
                </div>

                <div className="container">
                    {/** Email Address */}
                    <div>
                        <label htmlFor="uname"><b>Email ID</b></label>
                        <input type="text" placeholder="Enter Email" name="uname" ref={emailRef} onChange={() => formValidation('emailRef')} required autoComplete={"off"}/>
                        <span className="error_msg">{emailError && emailError}</span>
                    </div>

                    {/** Password */}
                    <div>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" ref={passwdRef} onChange={() => formValidation('passwdRef')} required autoComplete={"off"} />
                        <span className="error_msg">{passwdError && passwdError}</span>
                    </div>

                    <button type="submit" onClick={() => handleSubmit()}>Login</button>
                    {/* <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label> */}
                </div>

                <div className="login-footer">
                    <span className="psw"><a href="#">Register</a></span>
                    <span className="psw"><a href="#">Forgot password?</a></span>
                </div>


            </div>
        </>
    );
}
