import React from 'react';
import '../IntroPagina/StyleIntroPagina.css';
import logoPagina from '../../../assets/logoPagina4.png';
import videoPagina from '../../../assets/Intro/videopagina.mp4';

const IntroPagina = () => {
  return (
    <>
      <div className='contenedor container w-100'>
        <div className='headerMG  row contentMG h-100'>
          <div className='videoMG'>
            <video src={videoPagina} autoPlay muted loop />
          </div>
          <div className='headreContentMG container row justify-content-center'>
            <img className='col-12' src={logoPagina} alt='' />
            <p className='col-10 text-center'>Te brindamos un gimnasio de vanguardia. Contamos con equipos de última generación, entrenadores expertos e indumentaria deportiva de alta calidad </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPagina;
