import Header from "../../pages/header";
import './tAndw.css';
import '../../css/App.css';
import '../../css/events.css';
import { TrainigsAndWorkshopsText } from "../../utils/utils";
import trainings from "./static";
export default function TrainingsAndWorkshops() {
    return (
        <>
            <Header />
            <div className="tAndw about events">
                <h3 className="events-heading about-heading">Trainings And Workshops</h3>
                <marquee><i><p className="event-desc" className="about-para">*{TrainigsAndWorkshopsText}</p></i></marquee>
            </div>
            <div className="table-body">
                <table className="table table-hover table-style">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Topic</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Tutor</th>
                            <th>Last Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainings.map((each, index) => {
                                return (<tr key={index}>
                                    <td>{each.sNo}</td>
                                    <td>{each.topicName}</td>
                                    <td>{each.location}</td>
                                    <td>{each.date}</td>
                                    <td>{each.tutor}</td>
                                    <td>{each.lastDate}</td>
                                    <td><input type="checkbox" name="brand" defaultChecked={each.action} disabled={each.expired}/></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}