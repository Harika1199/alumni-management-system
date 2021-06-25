import './App.css';
import Header from './header';
import banner from './banner.jpg';

function App() {
  return (
    <div className="App" id='body-div'>
      <Header />
      <div>
        <img src={banner} className="home-banner" alt="banner"/>
        <h2 className="home-heading">Welcome To Alumni Management System</h2>
      </div>
    </div>
  );
}

export default App;
