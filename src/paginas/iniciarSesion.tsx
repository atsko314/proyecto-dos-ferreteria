import FormularioLogin from "../componentes/organismos/FormularioLogin";
import { Link } from "react-router-dom";

function IniciarSesion() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm p-4 bg-light">
            <h2 className="text-center mb-4 text-dark">Iniciar Sesión</h2>
            
            
            <FormularioLogin />

            <div className="text-center mt-3">
              <p className="mb-0 text-dark fs-6">
                ¿No tienes cuenta?{" "}
                <Link to="/crearCuenta" className="texto-registro fw-bold">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;