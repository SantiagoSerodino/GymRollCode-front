import React from 'react';
import Navbar from './Components/generals/Navbar/Navbar';
import Clima from '../Components/Clima/Clima';
import Footer from './components/footer/Footer';

const PlanMusculacion = () => {
  return (
<>
  <Navbar />
  <div className='container-fluid'>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-5 col-lg-4 mb-4'>
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <img src="../src/assets/planes-img/musculacion.png" className="img-fluid rounded-start" alt="imagen" />
            <div className="card-body">
              <h1 className="card-title">Plan Musculación</h1>
              <p className="card-text">
              Transforma tu cuerpo con nuestro plan básico de gimnasio. Incluye acceso limitado a nuestras instalaciones, rutinas de entrenamiento basicas y asesoramiento profesional. Descubre una nueva versión de ti mismo con nosotros.
              </p>
              <h2>Precio: $5000. mensual</h2>
              <button className="btn btn-musc btn-primary">Registrate!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Clima />
  <Footer />
</>
  )
}

export default PlanMusculacion;