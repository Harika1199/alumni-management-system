import Header from "../../pages/header";
import '../../css/App.css';
import '../../css/events.css';
export default function Events() {
    return (
        <>
            <Header />
            <div className="about events">
                <h1 className="events-heading" className="about-heading events-heading">Events</h1>
                <p className="event-desc" className="about-para">It is important to carry out a good follow-up marketing of alumni events.With over 100 worldwide events a year, you have a wealth of alumni networking opportunities.</p>
            </div>
            <div>
                <div className="each-event">
                    <div className="col-2"><h1 className="events-heading">30 </h1><p className="event-desc">June</p></div>
                    <div className="col-6"><h4 className="event-name">Saphalya</h4><p className="event-desc">Women Empowerment</p></div>
                    <button className="btn btn-outline-warning read-more">Read More</button>
                </div>
                <div className="each-event">
                    <div className="col-2"><h1 className="events-heading">2 </h1><p className="event-desc">July</p></div>
                    <div className="col-6"><h4 className="event-name">Shikara</h4><p className="event-desc">Inter College Fest</p></div>
                    <button className="btn btn-outline-warning read-more">Read More</button>
                </div>
                <div className="each-event">
                    <div className="col-2"><h1 className="events-heading">27 </h1><p className="event-desc">August</p></div>
                    <div className="col-6"><h4 className="event-name">Cygnus</h4><p className="event-desc">Let's Celebrate College Anniversary</p></div>
                    <button className="btn btn-outline-warning read-more">Read More</button>
                </div>
                <div className="each-event">
                    <div className="col-2"><h1 className="events-heading">12</h1><p className="event-desc">October</p></div>
                    <div className="col-6"><h4 className="event-name">Senorita</h4><p className="event-desc">ECE Student's Farewell Day</p></div>
                    <button className="btn btn-outline-warning read-more">Read More</button>
                </div>
            </div>
        </>
    )
}