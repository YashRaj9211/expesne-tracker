import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav className='Nav-bar'>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;