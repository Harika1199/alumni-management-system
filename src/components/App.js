import '../css/App.css';
import Header from '../pages/header';
// import banner from '../images/banner.jpg';
import { useEffect } from 'react';
import ToastMessage from './toast/toastMessage';
import { useSelector, useDispatch } from 'react-redux';
import CarouselComponent from '../pages/carousel';

function App() {
  const state = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.showLoginToast) {
      ToastMessage.notify("Logged In Successfully");
      dispatch({ type: "USER_LOGIN_TOAST", payLoad: false });
    }
  }, [state.showLoginToast])
  return (
    <div className="App" id='body-div'>
      <Header />
      <div className="home">
        <CarouselComponent />
        {/* <img src={banner} className="home-banner" alt="banner" /> */}
        <h2 className="home-heading">Welcome To Alumni Management System</h2>
      </div>
      <div className="about">
        <h1 className="about-heading">About us</h1>
        <p className="about-para">The Main Objective of Online Alumni Management Portal is to maintain communication between the students who graduated from this college and students studying in this college to know about each other’s current activities. It helps to know and allow the alumni to participate in the events and trainings that are conducted at the college. Alumni students can post current opportunities for the students  students can apply for it. Nowadays ,it is very difficult to communicate with our seniors without knowing any details about them, and the only way is to contact college  for their activities, to avoid this, we are creating a web application where the current students and passed out students have to register and update their details, through which we can establish a connection between them and also they can also organize meet ups. They can have friendly environment by posting their thoughts and ideas which helps in developing their future plans.   </p>
      </div>
      {/* <div className="about">
        <h1 className="about-heading">Jobs</h1>
        <p className="about-para">The Main Objective of Online Alumni Management Portal is to maintain communication between the students who graduated from this college and students studying in this college to know about each other’s current activities. It helps to know and allow the alumni to participate in the events and trainings that are conducted at the college. Alumni students can post current opportunities for the students  students can apply for it. Nowadays ,it is very difficult to communicate with our seniors without knowing any details about them, and the only way is to contact college  for their activities, to avoid this, we are creating a web application where the current students and passed out students have to register and update their details, through which we can establish a connection between them and also they can also organize meet ups. They can have friendly environment by posting their thoughts and ideas which helps in developing their future plans.   </p>
      </div>
      <div className="about">
        <h1 className="about-heading">Events</h1>
        <p className="about-para">The Main Objective of Online Alumni Management Portal is to maintain communication between the students who graduated from this college and students studying in this college to know about each other’s current activities. It helps to know and allow the alumni to participate in the events and trainings that are conducted at the college. Alumni students can post current opportunities for the students  students can apply for it. Nowadays ,it is very difficult to communicate with our seniors without knowing any details about them, and the only way is to contact college  for their activities, to avoid this, we are creating a web application where the current students and passed out students have to register and update their details, through which we can establish a connection between them and also they can also organize meet ups. They can have friendly environment by posting their thoughts and ideas which helps in developing their future plans.   </p>
      </div>
      <div className="about">
        <h1 className="about-heading">{'Trainings & Workshops'}</h1>
        <p className="about-para">The Main Objective of Online Alumni Management Portal is to maintain communication between the students who graduated from this college and students studying in this college to know about each other’s current activities. It helps to know and allow the alumni to participate in the events and trainings that are conducted at the college. Alumni students can post current opportunities for the students  students can apply for it. Nowadays ,it is very difficult to communicate with our seniors without knowing any details about them, and the only way is to contact college  for their activities, to avoid this, we are creating a web application where the current students and passed out students have to register and update their details, through which we can establish a connection between them and also they can also organize meet ups. They can have friendly environment by posting their thoughts and ideas which helps in developing their future plans.   </p>
      </div> */}
    </div>
  );
}

export default App;
