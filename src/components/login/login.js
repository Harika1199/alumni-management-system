import { useState, useRef, useEffect } from "react";
import ToastMessage from '../toast/toastMessage';
import Header from '../../pages/header';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './login.css';

export default function UserLogin({ history }) {
    const emailRef = useRef("");
    const passwdRef = useRef("");
    const [emailError, setEmailError] = useState("");
    const [passwdError, setPasswsError] = useState("");

    const state = useSelector(state => state.login)
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.showRegisterToast) {
            ToastMessage.notify("Registered Successfully.Please Login..");
            dispatch({ type: "USER_SIGNUP_TOAST", payLoad: false });
        }
    }, [state.showRegisterToast])

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
            localStorage.setItem("token", "xyz")
            dispatch({ type: "USER_LOGIN", payLoad: true });
            dispatch({ type: "USER_LOGIN_TOAST", payLoad: true });
            history.push("/")
        }
    }

    return (
        <>
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <form onsubmit="event.preventDefault()" class="box">
                                <h1>Login</h1>
                                <p class="text-muted"> Please enter your login and password!</p>

                                {/** Email Address */}
                                <div>
                                    <input type="text" placeholder="Enter Email" name="uname" ref={emailRef} onChange={() => formValidation('emailRef')} required autoComplete={"off"} />
                                    <span className="error_msg">{emailError && emailError}</span>
                                </div>

                                {/** Password */}
                                <div>
                                    <input type="password" placeholder="Enter Password" name="psw" ref={passwdRef} onChange={() => formValidation('passwdRef')} required autoComplete={"off"} />
                                    <span className="error_msg">{passwdError && passwdError}</span>
                                </div>

                                <span class="forgot text-muted">New User?<Link to="/register"> Register Here</Link></span>
                                {/* <a class="forgot text-muted" href="#">Forgot password?</a> */}
                                <input type="submit" name="" value="Login" href="#" onClick={() => handleSubmit()} />
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
