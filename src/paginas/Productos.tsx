import { useParams } from "react-router-dom";
import CardProductos from "../componentes/moleculas/CardProductos";

export const listaProductos = [
  {
    //--MATERIALES DE CONSTRUCCION--
    id: 1,
    titulo: "Cemento Polpaico gris 25 kg",
    descripcion: "Para obras y construcción en general.",
    precio: 4990,
    imagen: "/imagenes/cemento.png",
    categoria: "materiales-construccion",
  },
  {
    id: 2,
    titulo: "Cemento Melón blanco 25 kg",
    descripcion: "Para obras y construcción en general.",
    precio: 49990,
    imagen: "/imagenes/cMelon.png",
    categoria: "materiales-construccion",
  },
  {
    id: 3,
    titulo: "Arena fina construcción 25 kg",
    descripcion: "Para obras y construcción en general.",
    precio: 4990,
    imagen: "/imagenes/arenaFina.png",
    categoria: "materiales-construccion",
  },
  {
    id: 4,
    titulo: "Mortero cola cerámica 25 kg",
    descripcion: "Para obras y construcción en general.",
    precio: 4490,
    imagen: "/imagenes/mortero.png",
    categoria: "materiales-construccion",
  },
  {
    id: 5,
    titulo: "Ladrillo fiscal N°5",
    descripcion: "Para obras y construcción en general.",
    precio: 28990,
    imagen: "/imagenes/LadrillofiscalN°5.png",
    categoria: "materiales-construccion",
  },

  {
    id: 6,
    titulo: "Ladrillo prensado 6x14x29 cm",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/Ladrilloprensado.png",
    categoria: "materiales-construccion",
  },
  {
    id: 7,
    titulo: "Bloque de hormigón 19x19x39 cm",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/Bloquedehormigon.png",
    categoria: "materiales-construccion",
  },
  {
    id: 8,
    titulo: "Bloque liviano 10x20x40 cm",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/Bloqueliviano.png",
    categoria: "materiales-construccion",
  },
  {
    id: 9,
    titulo: "Ripio 25 kg",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/ripio.png",
    categoria: "materiales-construccion",
  },

  //--HERRAMIENTAS ELECTRICAS--
  {
    id: 10,
    titulo: "Taladro percutor 650W 13mm",
    descripcion: "Para obras y construcción en general.",
    precio: 40990,
    imagen: "/imagenes/taladroPer.png",
    categoria: "electricas",
  },
  {
    id: 11,
    titulo: "Atornillador inalámbrico 12V (kit)",
    descripcion: "Para obras y construcción en general.",
    precio: 40990,
    imagen: "/imagenes/atornilador.png",
    categoria: "electricas",
  },
  {
    id: 12,
    titulo: "Amoladora angular 4.5 800W",
    descripcion: "Para obras y construcción en general.",
    precio: 40990,
    imagen: "/imagenes/amoladora.png",
    categoria: "electricas",
  },
  {
    id: 13,
    titulo: "Sierra circular 7-1/4 1200W",
    descripcion: "Para obras y construcción en general.",
    precio: 40990,
    imagen: "/imagenes/sierra.png",
    categoria: "electricas",
  },
  {
    id: 14,
    titulo: "Lijadora orbital 180W",
    descripcion: "Para obras y construcción en general.",
    precio: 40990,
    imagen: "/imagenes/lijadora.png",
    categoria: "electricas",
  },
  {
    id: 15,
    titulo: "Caladora 500W",
    descripcion: "Para obras y construcción en general.",
    precio: 40990,
    imagen: "/imagenes/caladora.png",
    categoria: "electricas",
  },

  //--HERRAMIENTAS MANUALES--
  {
    id: 16,
    titulo: "Martillo carpintero 500g",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/martillo.png",
    categoria: "manuales",
  },
  {
    id: 17,
    titulo: "Alicate universal 8 pulgadas",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/alicate.png",
    categoria: "manuales",
  },
  {
    id: 18,
    titulo: "Destornillador plano 6x100mm",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/desaPlano.png",
    categoria: "manuales",
  },
  {
    id: 19,
    titulo: "Destornillador Phillips PH2 6x100mm",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/desa.png",
    categoria: "manuales",
  },
  {
    id: 20,
    titulo: "Llave ajustable 10 pulgadas",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/llave.png",
    categoria: "manuales",
  },
  {
    id: 21,
    titulo: "Juego llaves hexagonales métrico x9",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/llaveH.png",
    categoria: "manuales",
  },

  {
    id: 22,
    titulo: "Serrucho 20\" 7 dientes por pulgada",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/serrucho.png",
    categoria: "manuales",
  },
  {
    id: 23,
    titulo: "Nivel de burbuja 60 cm",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/nivel.png",
    categoria: "manuales",
  },
  {
    id: 24,
    titulo: "Cinta métrica 8m autoblocante",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/cinta.png",
    categoria: "manuales",
  },

    //--GASFITERIA--
  {
    id: 25,
    titulo: "Cañería PVC 1/2\" x 6m",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/pvc.png",
    categoria: "gasfiteria",
  },
  {
    id: 26,
    titulo: "Cañería cobre 1/2\" x 5m",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/cañeCobre.png",
    categoria: "gasfiteria",
  },
  {
    id: 27,
    titulo: "Codo PVC 1/2\" 90°",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/codo.png",
    categoria: "gasfiteria",
  },
  {
    id: 28,
    titulo: "Te PVC 1/2\"",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/te.png",
    categoria: "gasfiteria",
  },
  {
    id: 28,
    titulo: "TUnión doble PVC 1/2",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/union.png",
    categoria: "gasfiteria",
  },
  {
    id: 29,
    titulo: "Llave de paso esfera 1/2\" latón",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/llavePaso.png",
    categoria: "gasfiteria",
  },
  {
    id: 30,
    titulo: "Llave de paso esfera 3/4\" latón",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/llaveBola.png",
    categoria: "gasfiteria",
  },
  {
    id: 31,
    titulo: "Grifería lavamanos monocomando cromo",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/monocomando.png",
    categoria: "gasfiteria",
  },
  {
    id: 32,
    titulo: "llave monomando Grifería cocina monocomando cuello alto",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/cocina.png",
    categoria: "gasfiteria",
  },

  //--ELECTRICIDAD--
  {
    id: 33,
    titulo: "Cable unipolar 1.5mm² Rojo (por metro)",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/unipolarRojo.png",
    categoria: "electricidad",
  },
  {
    id: 34,
    titulo: "Cable unipolar 2.5mm² Rojo (por metro)",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/cable2.png",
    categoria: "electricidad",
  },
  {
    id: 35,
    titulo: "Cable dúplex paralelo 2x1.5mm² Blanco (por metro)",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/duplex.png",
    categoria: "electricidad",
  },
  {
    id: 36,
    titulo: "Enchufe empotrar 16A c/tierra (schuko)",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/encufe.png",
    categoria: "electricidad",
  },
  {
    id: 37,
    titulo: "Enchufe doble empotrar 16A c/tierra",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/enchufeD.png",
    categoria: "electricidad",
  },

  {
    id: 38,
    titulo: "Interruptor simple empotrar",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/interruptor.png",
    categoria: "electricidad",
  },
  {
    id: 39,
    titulo: "Tablero eléctrico 4 espacios DIN",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/tablero4.png",
    categoria: "electricidad",
  },
  {
    id: 40,
    titulo: "Disyuntor termomagnético 16A unipolar",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/disyuntor.png",
    categoria: "electricidad",
  },
  {
    id: 41,
    titulo: "Disyuntor termomagnético 25A unipolar",
    descripcion: "Para obras y construcción en general.",
    precio: 5990,
    imagen: "/imagenes/disMag.png",
    categoria: "electricidad",
  }
  

];

function Productos() {
  
  const { categoria } = useParams<{ categoria?: string }>();

  const productosFiltrados = categoria
    ? listaProductos.filter((prod) => prod.categoria === categoria)
    : listaProductos;

  return (
    <div className="container my-5">
      <h1 className="text-white text-center mb-4 text-capitalize">
        {categoria ? `Categoría: ${categoria.replace("-", " ")}` : "Todos los Productos"}
      </h1>

      <div className="row g-4 justify-content-center">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <div key={prod.id} className="col-auto">
              <CardProductos
                titulo={prod.titulo}
                descripcion={prod.descripcion}
                precio={prod.precio}
                imagen={prod.imagen}
              />
            </div>
          ))
        ) : (
          <p className="text-white text-center fs-5 mt-4">
            No se encontraron productos en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
}

export default Productos;