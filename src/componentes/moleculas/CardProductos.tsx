import Boton from "../atomos/Boton";

interface CardProps{
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

function CardProductos({titulo, descripcion, precio, imagen}: CardProps){
    return (
        <div className="card" style={{width: "18rem"}}>

            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
            />
            <div className="card-body d-flex flex-column">

                <h5 className="card-title">
                    {titulo}
                </h5>

                <p className="card-text">
                    {descripcion}
                </p>

                <p className="card-text">
                    ${precio}
                </p>

                <div className="d-flex gap-2 mt-auto">
                    <Boton texto="Ver detalle"></Boton>
                    <Boton texto="Agregar al carrito"></Boton>
                </div>
            </div>
        </div>
    );
}

export default CardProductos;