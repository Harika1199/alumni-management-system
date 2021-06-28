import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/App.css';

export default function Header() {
    const state = useSelector(state => state.login);
    const dispatch = useDispatch();

    const Logout = () => {
        localStorage.removeItem("token");
        dispatch({ type: "USER_LOGIN", payLoad: false });
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="logo">
                <Link to="/" className="navbar-brand font-effect-fire">
                    Alumni Management system
                </Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item mr-30">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item mr-30">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item mr-30">
                    <Link to="/jobs" className="nav-link">Jobs</Link>
                </li>
                <li className="nav-item mr-30">
                    <Link to="/events" className="nav-link">Events</Link>
                </li>
                <li className="nav-item mr-30">
                    {
                        !state.isLoggedIn &&
                        <Link to="/login" className="nav-link">Login</Link>
                    }
                </li>
                {
                    !state.isLoggedIn &&
                    <li className="nav-item mr-30">

                        <Link to="/register" className="nav-link">Register</Link>

                    </li>}
                {
                    state.isLoggedIn &&
                    <li className="nav-item mr-30 dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            My Account
                        </a>
                        <div className="dropdown-menu">
                            <Link to="/" className="dropdown-item" onClick={() => { Logout() }}>Logout
                            </Link>
                        </div>
                    </li>
                }
            </ul>
        </nav>
    )
}