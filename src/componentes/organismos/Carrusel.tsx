function Carrusel(){
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/imagenes/img1.png" className="carrusel-img w-100" alt="22 años de trayectoria" />
          <div className="carousel-caption d-none d-md-block">
            <h5>22 años de trayectoria</h5>
            <p>Trabajamos con la mejor calidad de servicio.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/imagenes/img2.webp" className="carrusel-img w-100" alt="Todo lo que necesitas" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Todo lo que necesitas</h5>
            <p>Materiales de construcción, herramientas eléctricas y manuales, gasfitería, electricidad.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/imagenes/imFER.png" className="carrusel-img w-100" alt="¡Visítanos!" />
          <div className="carousel-caption d-none d-md-block">
            <h5>¡¡Visítanos!!</h5>
            <p>Nos encontramos en La Serena, Región de Coquimbo.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;