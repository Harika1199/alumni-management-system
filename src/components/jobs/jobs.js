import { useContext, useEffect, useState } from "react";
import Header from "../../pages/header";
import './jobs.css';
import CreateJob from "./createJob";
import ApplyJob from "./applyJob";
import ToastMessage from "../toast/toastMessage";
import { JobContext } from "./useJob";
import { useSelector } from 'react-redux';

export default function Jobs({ history }) {
    // state variables
    const [openCreateJobPopup, setOpenCreateJobPopup] = useState(false);
    const [openApplyJobPopup, setOpenApplyJobPopup] = useState(false);

    // Using context of jobs data
    const jobContextValue = useContext(JobContext);

    // Using redux store data of login Reducer
    const state = useSelector(state => state.login)

    useEffect(() => {
        if (!state.isLoggedIn) {
            ToastMessage.notify("Please Login to Continue..");
            history.push("/login");
        }
    }, [state.isLoggedIn])

    // Popup Open/Close handling
    const closePopup = (status, type) => {
        if (type == "post") {
            if (status) {
                ToastMessage.notify("Job Posted Successfully");
            }
            setOpenCreateJobPopup(false);
        } else if (type == "apply") {
            if (status) {
                ToastMessage.notify("Applied to Job Successfully");
            }
            setOpenApplyJobPopup(false);
        }
    }
    return (
        <>
            <Header />
            <div className="container jobs">
                <h2 className="job-heading">Job Openings</h2>
                {state.loginData && state.loginData.usertype && state.loginData.usertype == 2 && <button type="button" className="btn btn-outline-primary apply-job" data-toggle="modal" onClick={() => setOpenCreateJobPopup(!openCreateJobPopup)}>Post A Job</button>}

                {
                    jobContextValue.jobs.map((eachJob, index) => {
                        return (
                            <div className="each-job" key={index}>
                                <div className="job-header">
                                    <h4 className="posted-by">Posted By {eachJob.postedBy}</h4>
                                    <button type="button" className="btn btn-outline-success post-job" data-toggle="modal" onClick={() => setOpenApplyJobPopup(!openApplyJobPopup)}>Apply For Job</button>
                                </div>
                                <div className="job-data">
                                    <p className="job-data-detail">{eachJob.companyName}</p>
                                    <p className="job-data-detail">{eachJob.location}</p>
                                    <p className="job-data-detail">{eachJob.experience}</p>
                                    <p className="job-data-detail">Key Skills: {eachJob.skills}</p>
                                    <p className="job-data-detail">Pay Scale: {eachJob.package}</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            {openCreateJobPopup && <CreateJob closePopup={(status, type) => closePopup(status, type)} />}
            {openApplyJobPopup && <ApplyJob closePopup={(status, type) => closePopup(status, type)} />}
        </>
    );
}