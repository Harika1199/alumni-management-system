import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';

export default function Header() {
    const state = useSelector(state => state.login);
    const dispatch = useDispatch();

    console.log(state);
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="logo">
                <Link to="/" className="navbar-brand">
                    Alumni Management system
                </Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                    {/* <a className="nav-link" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                    {/* <a className="nav-link" href="#">About</a> */}
                </li>
                <li className="nav-item">
                    <Link to="/jobs" className="nav-link">Jobs</Link>
                    {/* <a className="nav-link" href="#">Jobs</a> */}
                </li>
                <li className="nav-item">
                    {
                        !state.isLoggedIn &&
                        <Link to="/login" className="nav-link">Login</Link>
                    }
                    {/* <a className="nav-link" href="#">Login</a> */}
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                    {/* <a className="nav-link" href="#">Register</a> */}
                </li>
                <li className="nav-item">
                    {
                        state.isLoggedIn &&
                        <Link to="/" className="nav-link" onClick={() => dispatch({ type: "USER_LOGOUT", payLoad: false })}>Logout</Link>
                    }
                    {/* <a className="nav-link" href="#">Login</a> */}
                </li>

            </ul>
        </nav>
    )
}