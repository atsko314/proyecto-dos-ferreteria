import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-ferreteria">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FLM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">oda</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">odaoda</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">oda</Link></li>
                                <li><Link className="dropdown-item" to="#">oda</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="#">oda</Link></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="#">oda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="#">oda</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;