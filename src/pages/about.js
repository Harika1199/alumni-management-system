import Header from "./header";
import '../css/App.css';
export default function About() {
    return (
        <>
            <Header />
            <div className="about">
                <h1 className="about-heading">About us</h1>
                <p className="about-para">The Main Objective of Online Alumni Management Portal is to maintain communication between the students who graduated from this college and students studying in this college to know about each other’s current activities. It helps to know and allow the alumni to participate in the events and trainings that are conducted at the college. Alumni students can post current opportunities for the students  students can apply for it. Nowadays ,it is very difficult to communicate with our seniors without knowing any details about them, and the only way is to contact college  for their activities, to avoid this, we are creating a web application where the current students and passed out students have to register and update their details, through which we can establish a connection between them and also they can also organize meet ups. They can have friendly environment by posting their thoughts and ideas which helps in developing their future plans.   </p>
            </div>
        </>
    );
}