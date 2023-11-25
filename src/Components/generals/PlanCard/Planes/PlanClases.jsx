import React from 'react';
import AutoEmail from '../../../Specific/AutoEmail/AutoEmail';
import '../Planes/StylePlanMusculacion.css';
import clasesImage from '../../../../assets/planes-img/clases.jpg';

const PlanClases = () => {
  return (
    <>
      <div className='container-fluid contenedorPlanes'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-6 '>
              <div className=' mb-3 bordeCrad' style={{ maxWidth: '540px' }}>
                <img src={clasesImage} className='img-fluid rounded-start' alt='imagen' />
                <div className='cardContenedora  p-3'>
                  <h1 className='card-title text-center'>Plan Clases</h1>
                  <p className='card-text text-center'>
                    Alcanza tus metas fitness de manera personalizada con nuestro exclusivo plan de clases. Disfruta de sesiones diseñadas específicamente para ti, guiadas por entrenadores expertos. Descubre la diferencia que la atención personalizada puede hacer en tu rendimiento y bienestar.
                  </p>
                  <h2>Precio: $7500. mensual</h2>
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

export default PlanClases;
