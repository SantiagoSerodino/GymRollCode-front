import React from 'react';


const PlanClases = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-12'>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <img src="../src/assets/planes-img/clases.jpg" className="img-fluid rounded-start" alt="imagen" />
                <div className="card-body col-12 col-md-6">
                  <h1 className="card-title">Plan Clases</h1>
                  <p className="card-text">
                  Alcanza tus metas fitness de manera personalizada con nuestro exclusivo plan de clases. Disfruta de sesiones diseñadas específicamente para ti, guiadas por entrenadores expertos. Descubre la diferencia que la atención personalizada puede hacer en tu rendimiento y bienestar.
                  </p>
                  <h2>Precio: $7500. mensual</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      )
    }
    

export default PlanClases;