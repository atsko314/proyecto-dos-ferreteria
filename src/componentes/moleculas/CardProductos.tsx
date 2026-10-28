import Boton from "../atomos/Boton";

interface CardProps{
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

function CardProductos({titulo, descripcion, precio, imagen}: CardProps){
    return (
        <div className="card h-100" style={{width: "20rem"}}>

            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
                style={{height: "200px", objectFit: "contain"}}
            />
            <div className="card-body d-flex flex-column">

                <div>
                    <h5 className="card-title" style={{minHeight: "3rem"}}>
                        {titulo}
                    </h5>

                    <p className="card-text" style={{minHeight: "3rem"}}>
                        {descripcion}
                    </p>

                    <p className="card-text" style={{minHeight: "1rem"}}>
                        ${precio.toLocaleString('es-CL')}
                    </p>

                    <div className="mt-auto">
                        <Boton className="btn-detalle "texto="Ver detalle"></Boton>
                        <Boton className="btn-carrito "texto="Agregar al carrito"></Boton>
                    </div>
              </div>


            </div>
        </div>
    );
}

export default CardProductos;