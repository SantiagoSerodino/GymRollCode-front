import React from 'react';
import Navbar from './Components/generals/Navbar/Navbar';
import Clima from '../Components/Clima/Clima';
import Footer from './components/footer/Footer';


const PlanClases = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-5 col-lg-4 mb-4'>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <img src="../src/assets/planes-img/clases.jpg" className="img-fluid rounded-start" alt="imagen" />
                <div className="card-body">
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
    
      <Clima />
      <Footer />
    </>
      )
    }
    

export default PlanClases;