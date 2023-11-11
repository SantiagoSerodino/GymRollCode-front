import React from 'react'
import {player} from 'react-player'
import '../IntroPagina/StyleIntroPagina.css'

const IntroPagina = () => {
  return (
    <>
        <h1 className='textoPagMG'>IntroPagina</h1>
        <div className='header contenedor'>
            <div className="videoMG">
                <player autoplay src="../src/assets/Intro/videopagina.mp4" controls/>
            </div>
            <div className="headerFiltroMG"></div>
            <div className="headreContenidoMG">
                <h1>GymRoll</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab pariatur architecto repudiandae quaerat mollitia.</p>
            </div>

        </div>

    </>
  )
}

export default IntroPagina