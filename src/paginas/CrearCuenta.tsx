import FormularioRegistro from "../componentes/organismos/FormularioCrear";
import { Link } from "react-router-dom";

function CrearCuenta() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm p-4 bg-light text-dark">
            <h2 className="text-center mb-4 fs-3 fw-bold">Crear Cuenta</h2>

            <FormularioRegistro />

            <div className="text-center mt-3">
              <p className="mb-0 fs-6">
                ¿Ya tienes cuenta?{" "}
                <Link to="/iniciarSesion" className="texto-inicia fw-bold">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;