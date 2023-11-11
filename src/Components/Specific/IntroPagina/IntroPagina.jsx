import React from 'react'
import '../IntroPagina/StyleIntroPagina.css'

const IntroPagina = () => {
  return (
    <>
          <div className='contenedor container w-100'>
          <div className='headerMG  row contentMG h-100'>
              <div className="videoMG">
                <video  src={'../src/assets/Intro/videopagina.mp4'} autoPlay muted loop/>
              </div>
              <div className="headreContentMG container row justify-content-center">
                  <img className='col-12' src="../src/assets/logoPagina4.png" alt="" />
                  <p className='col-10 text-center ' >Te brindamos un gimnasio de vanguardia. Contamos con equipos de última generación, entrenadores expertos e indumentaria deportiva de alta calidad </p>
              </div>
          </div>
        </div>
    </>
  )
}

export default IntroPagina