import CardProducto from "../componentes/moleculas/CardProductos"

function Productos() {
    return (
        <div>
            <h1>PRODUCTOS</h1>

            <div className="d-flex gap-3">

                <CardProducto
                    titulo="Producto 1"
                    descripcion="Descripción del producto 1"
                    precio={10.99}
                    imagen="https://via.placeholder.com/150"
                />

                <CardProducto
                    titulo="Producto 2"
                    descripcion="Descripción del producto 2"
                    precio={19.99}
                    imagen="https://via.placeholder.com/150"
                />

                <CardProducto
                    titulo="Producto 3"
                    descripcion="Descripción del producto 3"
                    precio={5.99}
                    imagen="https://via.placeholder.com/150"
                />
            </div>
        </div>
    );
}