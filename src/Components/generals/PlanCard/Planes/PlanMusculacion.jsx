import React from 'react';
import AutoEmail from '../../../Specific/AutoEmail/AutoEmail';


const PlanMusculacion = () => {
  return (
<>
  <div className='container-fluid'>
    <div className='container'>
      <div className='row justify-content-around'>
        <div className='col-12'>
          <div className="card mb-3 col-12 col-md-6" style={{ maxWidth: '540px' }}>
            <img src="../src/assets/planes-img/musculacion.png" className="img-fluid rounded-start" alt="imagen" />
          </div>
            <div className="card-body col-12 col-md-6">
              <h1 className="card-title">Plan Musculación</h1>
              <p className="card-text">
              Transforma tu cuerpo con nuestro plan básico de gimnasio. Incluye acceso limitado a nuestras instalaciones, rutinas de entrenamiento basicas y asesoramiento profesional. Descubre una nueva versión de ti mismo con nosotros.
              </p>
              <h2>Precio: $5000. mensual</h2>
            </div>
            <div>
            <AutoEmail />
            </div>
        </div>
      </div>
    </div>
  </div>
  
</>
  )
}

export default PlanMusculacion;