import { useState } from "react";
import CampoFormulario from "../moleculas/campoformulario";

function FormularioCrear() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [direccion, setDireccion] = useState("");

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nombre.trim() === "" || apellido.trim() === "") {
      alert("Debe ingresar su nombre y apellido");
      return;
    }

    if (correo.trim() === "") {
      alert("Debe ingresar su correo electrónico");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert("Ingrese un correo válido");
      return;
    }

    if (contrasena.length < 4) {
      alert("La contraseña debe tener al menos 4 caracteres");
      return;
    }

    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert(`Cuenta creada con éxito para ${nombre} ${apellido}`);
  };

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <div className="row">
        <div className="col-12 col-md-6">
          <CampoFormulario
            etiqueta="Nombre"
            tipo="text"
            nombre="nombre"
            valor={nombre}
            alCambiar={setNombre}
          />
        </div>
        <div className="col-12 col-md-6">
          <CampoFormulario
            etiqueta="Apellido"
            tipo="text"
            nombre="apellido"
            valor={apellido}
            alCambiar={setApellido}
          />
        </div>
      </div>

      <CampoFormulario
        etiqueta="Correo electrónico"
        tipo="email"
        nombre="correo"
        valor={correo}
        alCambiar={setCorreo}
      />

      <CampoFormulario
        etiqueta="Dirección (Opcional)"
        tipo="text"
        nombre="direccion"
        valor={direccion}
        alCambiar={setDireccion}
      />

      <CampoFormulario
        etiqueta="Contraseña"
        tipo="password"
        nombre="password"
        valor={contrasena}
        alCambiar={setContrasena}
      />

      <CampoFormulario
        etiqueta="Confirmar contraseña"
        tipo="password"
        nombre="confirmarPassword"
        valor={confirmarContrasena}
        alCambiar={setConfirmarContrasena}
      />

      <button type="submit" className="btn-crear btn-primary w-100 mt-2">
        Crear Cuenta
      </button>
    </form>
  );
}

export default FormularioCrear;