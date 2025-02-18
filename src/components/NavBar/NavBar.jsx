import { Link } from "react-router-dom"
import "./NavBar.css"




export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <Link to="/">XFLIX</Link>
            </div>
            <div className="navbar-links">
             <Link to="/" className="nav-link">Home</Link>
             <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}