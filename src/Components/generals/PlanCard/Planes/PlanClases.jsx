import React from 'react';
import AutoEmail from '../../../Specific/AutoEmail/AutoEmail';
import '../Planes/StylePlanMusculacion.css'

const PlanClases = () => {
  return (
    <>
      <div className='container-fluid contenedorPlanes'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-6'>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <img src="../src/assets/planes-img/clases.jpg" className="img-fluid rounded-start" alt="imagen" />
                <div className="card-body ">
                  <h1 className="card-title">Plan Clases</h1>
                  <p className="card-text">
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
      )
    }
    

export default PlanClases;