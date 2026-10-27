interface BotonProps {
    texto: string;
    className?: string;
}

function Boton({texto, className = ''}: BotonProps) {
    return (
        <button type="button" className={`btn btn-primary ${className}`}>
            {texto}
        </button>
    );
}
export default Boton;