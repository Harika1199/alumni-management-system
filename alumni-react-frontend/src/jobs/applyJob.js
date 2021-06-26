import { useRef, useState } from "react";
import './jobs.css';
export default function ApplyJob() {
    // Student And Alumni Details
    const resumeRef = useRef("");
    const emailRef = useRef("");
    const fullNameRef = useRef("");
    const contactRef = useRef("");

    const [emailError, setEmailError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [contactError, setContactError] = useState("");
    const [resumeError, setResumeError] = useState("");

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
            case "resumeRef": {
                if (!resumeRef || !resumeRef.current || !resumeRef.current.value || (resumeRef && resumeRef.current.value.trim() === "")) {
                    setResumeError("Please Upload Resume");
                    errorCount = errorCount + 1;
                } else {
                    setResumeError("");
                }
                if (refName !== "all") {
                    break;
                }
            }

        }
    }

    const handleSubmit = () => {
        if (formValidation('all')) {
            console.log("All fields are validated");
        }
    }

    return (
        <>
            {/**<!-- The Modal -->*/}
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">

                        {/**<!-- Modal Header -->*/}
                        <div className="modal-header">
                            <div className="width-webkit">
                                <h1 className="modal-title">Apply For Job</h1>
                            </div>
                            <button type="button" className="close width-fit" data-dismiss="modal">×</button>
                        </div>

                        {/**<!-- Modal body -->*/}
                        <div className="modal-body">
                            <div className="container">
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

                                {/** Contact no */}
                                <div>
                                    <label htmlFor="uname"><b>Contact No</b></label>
                                    <input type="text" placeholder="Enter Contact Number" name="uname" ref={contactRef} onChange={() => formValidation('contactRef')} required />
                                    <span className="error_msg">{contactError && contactError}</span>
                                </div>
                                {/** Resume Upload */}
                                <div>
                                    <label htmlFor="uname"><b>Resume</b></label>
                                    <label htmlFor="formFileSm" className="form-label"></label>
                                    <input className="form-control form-control-sm" id="formFileSm" type="file" rerf={resumeRef} />
                                    <span className="error_msg">{resumeError && resumeError}</span>
                                </div>
                            </div>
                        </div>

                        {/**<!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success btn-popup" onClick={() => handleSubmit()}>Apply</button>
                            <button type="button" className="btn btn-danger btn-popup" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}