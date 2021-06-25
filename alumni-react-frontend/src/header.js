import { Link } from 'react-router-dom';
import './App.css';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="logo">
                <a className="navbar-brand" href="/">
                    Alumni Management system
                </a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
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
                    <Link to="/login" className="nav-link">Login</Link>
                    {/* <a className="nav-link" href="#">Login</a> */}
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                    {/* <a className="nav-link" href="#">Register</a> */}
                </li>
            </ul>
        </nav>
    )
}