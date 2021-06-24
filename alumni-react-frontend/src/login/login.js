import { useState, useRef } from "react";
import './login.css';

export default function UserLogin() {
    const emailRef = useRef("");
    const passwdRef = useRef("");
    const [emailError, setEmailError] = useState("");
    const [passwdError, setPasswsError] = useState("");


    const formValidation = (refName) => {
        let errorCount = 0;
        switch (refName) {
            case 'all': {

            }
            case "emailRef": {
                if (!emailRef || !emailRef.current || !emailRef.current.value || (emailRef && emailRef.current.value.trim() === "")) {
                    setEmailError("Please Enter Email Address");
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
            console.log("All fields are validated");
        }
    }

    return (
        <div classNameName="full-screen">

            <div className="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label for="uname"><b>Email ID</b></label>
                <input type="text" placeholder="Enter Username" name="uname" ref={emailRef} required />
                <span>{emailError && emailError}</span>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" ref={passwdRef} required />
                <span>{passwdError && passwdError}</span>

                <button type="submit" onClick={()=>handleSubmit()}>Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>

            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>


        </div>
    );
}