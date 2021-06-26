import { useState } from "react";
import Header from "../header";
import './jobs.css';
import CreateJob from "./createJob";
import ApplyJob from "./applyJob";

export default function Jobs() {
    const [openCreateJobPopup, setOpenCreateJobPopup] = useState(false);
    const [openApplyJobPopup, setOpenApplyJobPopup] = useState(false);
    return (
        <>
            <Header />
            <div className="container jobs">
                <h2>Job Openings</h2>
                <button type="button" className="btn btn-primary width-max" data-toggle="modal" data-target="#myModal" onClick={() => setOpenCreateJobPopup(!openCreateJobPopup)}>Post A Job</button>
                <div className="each-job">
                    <div className="job-header">
                        <h4 className="posted-by">Posted By Haritha</h4>
                        <button type="button" className="btn btn-primary width-max" data-toggle="modal" data-target="#myModal" onClick={() => setOpenApplyJobPopup(!openApplyJobPopup)}>Apply For Job</button>
                    </div>
                    <div className="job-data">
                        <p className="job-data-detail">Tcs</p>
                        <p className="job-data-detail">Hyderabad</p>
                        <p className="job-data-detail">5 Years Exp</p>
                        <p className="job-data-detail">Key Skills: C,Python</p>
                        <p className="job-data-detail">Pay Scale: 3.6 LPA</p>
                    </div>
                </div>

                <div className="each-job">
                    <div className="job-header">
                        <h4 className="posted-by">Posted By Haritha</h4>
                        <button type="button" className="btn btn-primary width-max" data-toggle="modal" data-target="#myModal" onClick={() => setOpenApplyJobPopup(!openApplyJobPopup)}>Apply For Job</button>
                    </div>
                    <div className="job-data">
                        <p className="job-data-detail">Tcs</p>
                        <p className="job-data-detail">Hyderabad</p>
                        <p className="job-data-detail">5 Years Exp</p>
                        <p className="job-data-detail">Key Skills: C,Python</p>
                        <p className="job-data-detail">Pay Scale: 3.6 LPA</p>
                    </div>
                </div>
                
            </div>
            {openCreateJobPopup && <CreateJob />}
            {openApplyJobPopup && <ApplyJob />}
        </>
    );
}