import Navbar from './componentes/organismos/Navbar';
import Titulo from './componentes/atomos/Titulo';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import Contacto from './paginas/Contacto';
import IniciarSesion from './paginas/iniciarSesion';
import CrearCuenta from './paginas/CrearCuenta';

function App() {
  return (
    <div>


      <Titulo/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/productos/:categoria" element={<Productos />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/iniciarSesion" element={<IniciarSesion/>} />

        <Route path="/crearCuenta" element={<CrearCuenta/>}/>
      </Routes>
      

    </div>
  );
}

export default App;