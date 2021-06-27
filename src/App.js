import './App.css';
import Header from './header';
import banner from './banner.jpg';
import {useEffect} from 'react';
import ToastMessage from './toastMessage';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state=>state.login)
  
  useEffect(() => {
    if(state.isLoggedIn){
      ToastMessage.notify("Logged In Successfully");
    } 
    // else{
    //   ToastMessage.notify("Logged Out Successfully")
    // }
    
  },[state.isLoggedIn])
  return (
    <div className="App" id='body-div'>
      <Header />
      <div>
        <img src={banner} className="home-banner" alt="banner" />
        <h2 className="home-heading">Welcome To Alumni Management System</h2>
      </div>
    </div>
  );
}

export default App;
