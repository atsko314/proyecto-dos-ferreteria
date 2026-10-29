function QuienesSomos() {
  return (
    
    <div className="container my-4">
      <div className="row g-3 align-items-stretch">
        
        
        <div className="col-12 col-md-6 d-flex">
          <div className="Fondo-O pt-4 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded-3 w-100 d-flex flex-column justify-content-between">
            
            <div className="my-3" style={{ minHeight: "100px" }}>
              <h2 className="texto-1 display-6 fw-normal">Nuestra Historia.</h2>
              <p className="texto-1 lead">22 años de trayectoria.</p>
            </div>

            
            <img
              src="/imagenes/trayectoria.png"
              alt="Nuestra Historia"
              className="shadow-sm mx-auto d-block"
              style={{
                width: "85%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "21px 21px 0 0"
              }}
            />
          </div>
        </div>

        
        <div className="col-12 col-md-6 d-flex">
          <div className="Fondo-C pt-4 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded-3 w-100 d-flex flex-column justify-content-between">
            
            <div className="my-3" style={{ minHeight: "100px" }}>
              <h2 className="texto-2 display-6 fw-normal">Compromiso y Calidad</h2>
              <p className="texto-2 lead">Trabajamos con la mejor calidad de servicio.</p>
            </div>

            
            <img
              src="/imagenes/calida.png"
              alt="Compromiso y Calidad"
              className="shadow-sm mx-auto d-block"
              style={{
                width: "85%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "21px 21px 0 0"
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default QuienesSomos;