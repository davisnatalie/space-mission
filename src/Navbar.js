import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="col-md-6">
            <div><Link to="/mission">Mission</Link></div>
            <div><Link to="/gallery">Gallery</Link></div>
            <div><Link to="/contact">Contact</Link></div>
        </nav>
     );
}

export default Navbar;