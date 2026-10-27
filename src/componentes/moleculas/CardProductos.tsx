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
            <div className="card-body">

                <h5 className="card-title">
                    {titulo}
                </h5>

                <p className="card-text">
                    {descripcion}
                </p>

                <p className="card-text">
                    ${precio}
                </p>

                <Boton />
            </div>
        </div>
    )
}

export default CardProductos;