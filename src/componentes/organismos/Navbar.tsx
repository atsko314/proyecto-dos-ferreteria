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
                            <Link className="nav-link" aria-current="page" to="/productos/materiales-construccion">Materiales de construcción</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Herramientas</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/productos/electricas">eléctricas</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/productos/manuales">Manuales</Link></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos/gasfiteria">gasfitería</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos/electricidad">electricidad</Link>
                        </li>
                    </ul>

                   <form className="d-flex">
                        <ul className="nav justify-content-end" barra-sup>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Iniciar sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="crearCuenta.html">Crear cuenta</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contacto.html">Contacto</Link>
                            </li>
                        </ul>
                            
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;