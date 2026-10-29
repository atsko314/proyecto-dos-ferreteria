import { useState } from "react";
import CampoFormulario from "../moleculas/campoformulario";

function FormularioLogin() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (correo.trim() === "") {
      alert("Debe ingresar su correo electrónico");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert("Ingrese un correo válido");
      return;
    }
    if (password.trim() === "") {
      alert("Debe ingresar su contraseña");
      return;
    }

    alert("Inicio de sesión exitoso");
  };

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <CampoFormulario
        etiqueta="Correo electrónico"
        tipo="email"
        nombre="correo"
        valor={correo}
        alCambiar={setCorreo}
      />

      <CampoFormulario
        etiqueta="Contraseña"
        tipo="password"
        nombre="password"
        valor={password}
        alCambiar={setPassword}
      />

      <button type="submit" className="btn-iniciar btn-primary w-100 mt-3">
        Iniciar Sesión
      </button>
    </form>
  );
}

export default FormularioLogin;