import { useState, useRef, useEffect } from "react";
import ToastMessage from '../toast/toastMessage';
import Header from '../../pages/header';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './login.css';

export default function UserLogin({ history }) {
    // state variables
    const emailRef = useRef("");
    const passwdRef = useRef("");
    const [emailError, setEmailError] = useState("");
    const [passwdError, setPasswdError] = useState("");

    // Redux store access variables
    const [state, signupUsersState] = useSelector(state => [state.login, state.signup])
    const dispatch = useDispatch();

    // Toast message
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

    // Validates all the fields taken as input
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
                    setEmailError("Invalid Email Address");
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
                    setPasswdError("Please Enter Password");
                    errorCount = errorCount + 1;
                } else {
                    setPasswdError("");
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

    // Submits the login info
    const handleSubmit = () => {
        if (formValidation('all')) {
            let estatus = true;
            let pstatus = true;
            if (signupUsersState.users && signupUsersState.users.length > 0) {
                let status = signupUsersState.users.filter((each) => each.email === emailRef.current.value.trim());
                if (status && status.length !== 1) {
                    estatus = false;
                }
            } else {
                estatus = false;
            }
            if (signupUsersState.users && signupUsersState.users.length > 0) {
                let status = signupUsersState.users.filter((each) => each.passwd === passwdRef.current.value.trim());
                if (status && status.length === 1) {
                    pstatus = false;
                }
            } else {
                pstatus = false;
            }

            if (!estatus || !pstatus) {
                setPasswdError("Incorrect Email or Password")
            } else {
                let usertypevalue= signupUsersState.users.filter((each)=>each.email === emailRef.current.value.trim());
                localStorage.setItem("token", "xyz")
                dispatch({ type: "USER_LOGIN", payLoad: true });
                dispatch({ type: "USER_LOGIN_TOAST", payLoad: true });
                localStorage.setItem("userLoginData",JSON.stringify({email:emailRef.current.value.trim(),passwd: passwdRef.current.value.trim(),usertype:usertypevalue[0].usertype,name:usertypevalue[0].name}));
                dispatch({ type: "SAVE_LOGIN_DATA", payLoad: {email:emailRef.current.value.trim(),passwd: passwdRef.current.value.trim(),usertype:usertypevalue[0].usertype,name:usertypevalue[0].name} });
                history.push("/")
            }
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="box">
                                <h1>Login</h1>
                                <p className="text-muted"> Please enter your login and password!</p>

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

                                <span className="forgot text-muted">New User?<Link to="/register"> Register Here</Link></span>
                                {/* <a className="forgot text-muted" href="#">Forgot password?</a> */}
                                <input type="submit" name="" value="Login" onClick={() => handleSubmit()} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
