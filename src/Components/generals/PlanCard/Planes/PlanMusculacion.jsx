import React from 'react';
import AutoEmail from '../../../Specific/AutoEmail/AutoEmail';
import '../Planes/StylePlanMusculacion.css';

import musculacionImage from '../../../../assets/planes-img/musculacion.png';

const PlanMusculacion = () => {
  return (
    <>
      <div className='container-fluid contenedorPlanes'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-6'>
              <div className='bordeCrad mb-3' style={{ maxWidth: '540px' }} >
                <img src={musculacionImage} className='img-fluid rounded-start' alt='imagen' />
              <div className='cardContenedora p-3 '>
                <h1 className='card-title text-center'>Plan Musculación</h1>
                <p className='card-text text-center'>
                  Transforma tu cuerpo con nuestro plan básico de gimnasio. Incluye acceso limitado a nuestras instalaciones, rutinas de entrenamiento basicas y asesoramiento profesional. Descubre una nueva versión de ti mismo con nosotros.
                </p>
                <h2>Precio: $5000. mensual</h2>
              </div>
            </div>
            </div>
            <div className='col-12 col-md-6'>
              <AutoEmail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanMusculacion;
