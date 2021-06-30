import { useRef, useState, useContext } from "react";
import { JobContext } from "./useJob";
export default function CreateJob({closePopup}) {
    // Student And Alumni Details
    const companyNameRef = useRef("");
    const locationRef = useRef("");
    const experienceRef = useRef("");
    const skillsRef = useRef("");
    const packageRef = useRef("");
    const [companyNameError, setCompanyNameError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [experienceError, setExperienceError] = useState("");
    const [skillsError, setSkillsError] = useState("");
    const [packageError, setPackageError] = useState("");

    // Using context of jobs data
    const jobContextValue = useContext(JobContext);

    // Validates all the fields taken as input
    const formValidation = (refName) => {
        let errorCount = 0;
        switch (refName) {
            case 'all': {

            }
            case "companyNameRef": {
                if (!companyNameRef || !companyNameRef.current || !companyNameRef.current.value || (companyNameRef && companyNameRef.current.value.trim().length === 0)) {
                    setCompanyNameError("Enter Company Name");
                    errorCount = errorCount + 1;
                } else if (companyNameRef.current.value && !((/^[a-zA-Z ]+$/).test(companyNameRef.current.value.trim()))) {
                    setCompanyNameError('Enter alphabets only');
                    errorCount = errorCount + 1;
                } else {
                    setCompanyNameError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "locationRef": {
                if (!locationRef || !locationRef.current || !locationRef.current.value || (locationRef && locationRef.current.value.trim() === "")) {
                    setLocationError("Enter Location");
                    errorCount = errorCount + 1;
                } else if (locationRef.current.value && !((/^[a-zA-Z ]+$/).test(locationRef.current.value.trim()))) {
                    setLocationError('Enter alphabets only');
                    errorCount = errorCount + 1;
                }else {
                    setLocationError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "experienceRef": {
                if (!experienceRef || !experienceRef.current || !experienceRef.current.value || (experienceRef && experienceRef.current.value.trim() === "")) {
                    setExperienceError("Enter Experience");
                    errorCount = errorCount + 1;
                } else {
                    setExperienceError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "skillsRef": {
                if (!skillsRef || !skillsRef.current || !skillsRef.current.value || (skillsRef && skillsRef.current.value.trim() === "")) {
                    setSkillsError("Enter Skills ");
                    errorCount = errorCount + 1;
                } else {
                    setSkillsError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
            case "packageRef": {
                if (!packageRef || !packageRef.current || !packageRef.current.value || (packageRef && packageRef.current.value.trim() === "")) {
                    setPackageError("Enter Package");
                    errorCount = errorCount + 1;
                } else {
                    setPackageError("");
                }
                if (refName !== "all") {
                    break;
                }
            }
        }
        return errorCount === 0 ? true : false;
    }

    /**
     * Submits data on succesful validation
     */
    const handleSubmit = () => {
        if (formValidation('all')) {
            let newJob={
                postedBy: "Harika",
                companyName:companyNameRef.current.value.trim(),
                location:locationRef.current.value.trim(),
                experience:experienceRef.current.value.trim(),
                skills:skillsRef.current.value.trim(),
                package:packageRef.current.value.trim()
            };
            jobContextValue.setJobs(oldArray=>[...oldArray,newJob]);
            closePopup(true,"post");
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
                            <h1 className="modal-title width-webkit">Post A Job</h1>
                            <button type="button" className="close width-max" onClick={()=> closePopup(false,"post")}>×</button>
                        </div>
                        {/**<!-- Modal body -->*/}
                        <div className="modal-body">
                            <div className="container">
                                {/** Company Name */}
                                <div>
                                    <label htmlFor="uname"><b>Company Name</b></label>
                                    <input type="text" placeholder="Enter Company Name" name="uname" ref={companyNameRef} onChange={() => formValidation('companyNameRef')} required autoComplete='off' maxLength={20} />
                                    <span className="error_msg">{companyNameError && companyNameError}</span>
                                </div>

                                {/** Company Location */}
                                <div>
                                    <label htmlFor="psw"><b>Location</b></label>
                                    <input type="text" placeholder="Enter Company's Location" name="psw" ref={locationRef} onChange={() => formValidation('locationRef')} required autoComplete='off' maxLength={20} />
                                    <span className="error_msg">{locationError && locationError}</span>
                                </div>

                                {/** Experience */}
                                <div>
                                    <label htmlFor="psw"><b>Experience</b></label>
                                    <input type="text" placeholder="Enter Experience" name="psw" ref={experienceRef} onChange={() => formValidation('experienceRef')} required autoComplete='off' maxLength={20} />
                                    <span className="error_msg">{experienceError && experienceError}</span>
                                </div>
                                {/** Skills */}
                                <div>
                                    <label htmlFor="psw"><b>Skills</b></label>
                                    <input type="text" placeholder="Enter skills" name="psw" ref={skillsRef} onChange={() => formValidation('skillsRef')} required autoComplete='off' maxLength={40} />
                                    <span className="error_msg">{skillsError && skillsError}</span>
                                </div>
                                {/** Package */}
                                <div>
                                    <label htmlFor="psw"><b>CTC</b></label>
                                    <input type="text" placeholder="Enter CTC P.A." name="psw" ref={packageRef} onChange={() => formValidation('packageRef')} required autoComplete='off' maxLength={20} />
                                    <span className="error_msg">{packageError && packageError}</span>
                                </div>
                            </div>
                        </div>

                        {/**<!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success btn-popup" onClick={() => handleSubmit()}>Post</button>
                            <button type="button" className="btn btn-danger btn-popup" onClick={()=> closePopup(false,"post")}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}