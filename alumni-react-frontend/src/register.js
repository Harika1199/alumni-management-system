import { useState, useRef, useEffect } from "react";
import Header from './header';
import './login/login.css';

export default function Registration() {
    // Student And Alumni Details
    const emailRef = useRef("");
    const passwdRef = useRef("");
    const fullNameRef = useRef("");
    const contactRef = useRef("");
    const courseRef = useRef("");
    const branchRef = useRef("");
    const addressRef = useRef("");
    const jobRef = useRef(""); // Alumni
    const jobLocationRef = useRef(""); // Alumni
    const passedOutYearRef = useRef(""); // Alumni
    const confirmPasswdRef = useRef("");
    const [userType, setUserType] = useState(1); // Default Student
    const [emailError, setEmailError] = useState("");
    const [passwdError, setPasswdError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [contactError, setContactError] = useState("");
    const [courseError, setCourseError] = useState("");
    const [branchError, setBranchError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [jobError, setJobError] = useState("");
    const [jobLocationError, setJobLocationError] = useState("");
    const [confirmPasswdError, setConfirmPasswdError] = useState("");
    const [passedOutYearError, setPassedOutYearError] = useState("");


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
                    setEmailError("Enter Email Address");
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
                    setPasswdError("Enter Password");
                    errorCount = errorCount + 1;
                } else {
                    setPasswdError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "confirmPasswdRef": {
                if (!confirmPasswdRef || !confirmPasswdRef.current || !confirmPasswdRef.current.value || (confirmPasswdRef && confirmPasswdRef.current.value.trim() === "")) {
                    setConfirmPasswdError("Confirm Password");
                    errorCount = errorCount + 1;
                } else {
                    setConfirmPasswdError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "fullNameRef": {
                if (!fullNameRef || !fullNameRef.current || !fullNameRef.current.value || (fullNameRef && fullNameRef.current.value.trim() === "")) {
                    setFullNameError("Enter Full Name");
                    errorCount = errorCount + 1;
                } else {
                    setFullNameError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "contactRef": {
                if (!contactRef || !contactRef.current || !contactRef.current.value || (contactRef && contactRef.current.value.trim() === "")) {
                    setContactError("Enter Contact Number");
                    errorCount = errorCount + 1;
                } else {
                    setContactError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "courseRef": {
                if (!courseRef || !courseRef.current || !courseRef.current.value || (courseRef && courseRef.current.value.trim() === "")) {
                    setCourseError("Enter Course Name");
                    errorCount = errorCount + 1;
                } else {
                    setCourseError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "branchRef": {
                if (!branchRef || !branchRef.current || !branchRef.current.value || (branchRef && branchRef.current.value.trim() === "")) {
                    setBranchError("Select Branch");
                    errorCount = errorCount + 1;
                } else {
                    setBranchError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "addressRef": {
                if (!addressRef || !addressRef.current || !addressRef.current.value || (addressRef && addressRef.current.value.trim() === "")) {
                    setAddressError("Enter Full Address");
                    errorCount = errorCount + 1;
                } else {
                    setAddressError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "jobRef": {
                if (userType && userType == 2) {
                    if (!jobRef || !jobRef.current || !jobRef.current.value || (jobRef && jobRef.current.value.trim() === "")) {
                        setJobError("Enter Occupation");
                        errorCount = errorCount + 1;
                    } else {
                        setJobError("");
                    }
                    if (refName !== "all") {
                        break;
                    }
                }
            }
            case "jobLocationRef": {
                if (userType && userType == 2) {
                    if (!jobLocationRef || !jobLocationRef.current || !jobLocationRef.current.value || (jobLocationRef && jobLocationRef.current.value.trim() === "")) {
                        setJobLocationError("Enter Job Location");
                        errorCount = errorCount + 1;
                    } else {
                        setJobLocationError("");
                    }
                    if (refName !== "all") {
                        break;
                    }
                }
            }
            case "passedOutYearRef": {
                if (userType && userType == 2) {
                    if (!passedOutYearRef || !passedOutYearRef.current || !passedOutYearRef.current.value || (passedOutYearRef && passedOutYearRef.current.value.trim() === "")) {
                        setPassedOutYearError("Select PassedOut Year");
                        errorCount = errorCount + 1;
                    } else {
                        setPassedOutYearError("");
                    }
                    if (refName !== "all") {
                        break;
                    }
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

    const getTabClassName = (tabNumber) => {
        return userType == tabNumber ? " active" : "";
    }

    useEffect(()=>{
        console.log("userType",userType);
    },[userType]);
    
    return (
        <>
            <Header />
            <div className="full-screen mxw-500">

                <div className="imgcontainer">
                    <h3>Register</h3>
                </div>

                {/** User Type Tabs */}

                <div className="container">
                    {/** Nav tabs */}
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className={"nav-link" + getTabClassName(1)} data-toggle="tab" href="#tab1" onClick={(e) => {
                                console.log(e)
                                setUserType(1)}}
                                >Student</a>
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link" + getTabClassName(2)} data-toggle="tab" href="#tab1" onClick={() => setUserType(2)}>Alumni</a>
                        </li>
                    </ul>

                    {/**  Tab panes */}
                    <div className="tab-content">
                        <div id="tab1" className="container tab-pane active"><br />
                            {/** Full Name */}
                            <div>
                                <label htmlFor="uname"><b>Full Name</b></label>
                                <input type="text" placeholder="Enter Full Name" name="uname" ref={fullNameRef} onChange={() => formValidation('fullNameRef')} required />
                                <span className="error_msg">{fullNameError && fullNameError}</span>
                            </div>

                            {/** Email Address */}
                            <div>
                                <label htmlFor="uname"><b>Email ID</b></label>
                                <input type="text" placeholder="Enter Email" name="uname" ref={emailRef} onChange={() => formValidation('emailRef')} required />
                                <span className="error_msg">{emailError && emailError}</span>
                            </div>

                            {/** Course */}
                            <div>
                                <label htmlFor="uname"><b>Course</b></label>
                                <input type="text" placeholder="Enter Course" name="uname" ref={emailRef} onChange={() => formValidation('emailRef')} required />
                                <span className="error_msg">{courseError && courseError}</span>
                            </div>
                            {/** Contact no */}
                            <div>
                                <label htmlFor="uname"><b>Contact No</b></label>
                                <input type="text" placeholder="Enter Contact Number" name="uname" ref={contactRef} onChange={() => formValidation('contactRef')} required />
                                <span className="error_msg">{contactError && contactError}</span>
                            </div>

                            {/** Address */}
                            <div>
                                <label htmlFor="uname"><b>Address</b></label>
                                <input type="text" placeholder="Enter Address" name="uname" ref={addressRef} onChange={() => formValidation('addressRef')} required />
                                <span className="error_msg">{addressError && addressError}</span>
                            </div>

                            {/** Job */}
                            {userType && userType == 2 &&
                                <div>
                                    <label htmlFor="uname"><b>Occupation</b></label>
                                    <input type="text" placeholder="Enter Occupation" name="uname" ref={jobRef} onChange={() => formValidation('jobRef')} required />
                                    <span className="error_msg">{jobError && jobError}</span>
                                </div>}

                            {/** Job Location */}
                            {userType && userType == 2 &&
                                <div>
                                    <label htmlFor="uname"><b>Job Location</b></label>
                                    <input type="text" placeholder="Enter Job Location" name="uname" ref={jobLocationRef} onChange={() => formValidation('jobLocationRef')} required />
                                    <span className="error_msg">{jobLocationError && jobLocationError}</span>
                                </div>}

                            {/** Passed Out Year */} {/** Branch */}
                            <>
                                <div className="dropdown-signup">
                                    {userType && userType == 2 &&
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                                PassedOut Year
                                            </button>

                                            <div class="dropdown-menu">
                                                {
                                                    [2020, 2019, 2018, 2017, 2016].map((eachYear, index) => {
                                                        return <p class="dropdown-item" ref={passedOutYearRef}>{eachYear}</p>
                                                    })
                                                }

                                            </div>
                                        </div>}

                                    <div class="btn-group">
                                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                            Branch
                                        </button>

                                        <div class="dropdown-menu">
                                            {
                                                ["CSE", "ECE", "EEE", "CE", "ME"].map((eachBranch, index) => {
                                                    return <p class="dropdown-item" ref={branchRef}>{eachBranch}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-signup">
                                    <span className="error_msg">{passedOutYearError && passedOutYearError}</span>
                                    <span className="error_msg">{branchError && branchError}</span>
                                </div> </>

                            {/** Password */}
                            <div>
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" ref={passwdRef} onChange={() => formValidation('passwdRef')} required />
                                <span className="error_msg">{passwdError && passwdError}</span>
                            </div>
                            {/** Confirm Password */}
                            <div>
                                <label htmlFor="psw"><b>Confirm Password</b></label>
                                <input type="password" placeholder="Confirm Password" name="psw" ref={confirmPasswdRef} onChange={() => formValidation('confirmPasswdRef')} required />
                                <span className="error_msg">{confirmPasswdError && confirmPasswdError}</span>
                            </div>

                            <button type="submit" onClick={() => handleSubmit()}>Signup</button>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}