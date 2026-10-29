import Carrusel from "../componentes/organismos/Carrusel";
import QuienesSomos from "../componentes/organismos/QuienesSomos";
import CardProductos from "../componentes/moleculas/CardProductos";
import { listaProductos } from "./Productos";

function Inicio() {
  // 1. Obtenemos las categorías únicas ("materiales-construccion", "electricas", etc.)
  const categoriasUnicas = Array.from(
    new Set(listaProductos.map((p) => p.categoria))
  );

  // 2. Extraemos exactamente los 2 primeros productos de cada categoría
  const productosDestacados = categoriasUnicas.flatMap((cat) =>
    listaProductos.filter((p) => p.categoria === cat).slice(0, 3)
  );

  return (
    <main>
      <section className="mb-5">
        <Carrusel />
      </section>

      <QuienesSomos />

      <section className="container my-5">
        <h2 className="texto-ProductosD text-center fw-bold mb-4">
          Productos Destacados
        </h2>

        <div className="row g-4 justify-content-center">
          {productosDestacados.map((prod) => (
            <div key={prod.id} className="col-auto">
              <CardProductos
                titulo={prod.titulo}
                descripcion={prod.descripcion}
                precio={prod.precio}
                imagen={prod.imagen}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;