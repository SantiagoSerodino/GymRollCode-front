import React from 'react';
import Navbar from './Components/generals/Navbar/Navbar';
import Clima from '../Components/Clima/Clima';
import Footer from './components/footer/Footer';

const PlanFull = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-5 col-lg-4 mb-4'>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <img src="../src/assets/planes-img/full.jpg" className="img-fluid rounded-start" alt="imagen" />
                <div className="card-body">
                  <h1 className="card-title">Plan Full</h1>
                  <p className="card-text">
                  Sumérgete en una experiencia completa de fitness con nuestro plan full. Accede ilimitadamente a nuestras clases de gimnasio y disfruta de una variedad de disciplinas, desde cardio hasta entrenamiento de fuerza. Alcanza tus objetivos con la diversidad de opciones que ofrecemos, guiado por instructores expertos.
                  </p>
                  <h2>Precio: $10800. mensual</h2>
                  <button className="btn btn-full btn-primary ">Registrate!</button>
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

export default PlanFull;