import React from 'react'

const About = () => {

    return (
    <>
    {/* <!-- Parte superior con la imagen del grupo y la descripción --> */}
    <div className="container grupo-container">
        <div className="row">
            <div className="col-md-6">
                <img src="imagen_grupo.jpg" alt="Imagen del grupo" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <p>Descripción de lo que ofrecemos.</p>
            </div>
        </div>
    </div>

    {/* <!-- Mision y Vision --> */}
    <div className="container mision-vision-container">
        <div className="row">
            <div className="col-md-6 mision-container">
                <h2>Misión</h2>
                <p>Tu misión aquí.</p>
            </div>
            <div className="col-md-6 vision-container">
                <h2>Visión</h2>
                <p>Tu visión aquí.</p>
            </div>
        </div>
    </div>

    {/* <!-- Lista de miembros del equipo --> */}
    <div className="container equipo-container">
        <div className="row">
            <div className="col-md-4 miembro-equipo">
                <img src="image1.jpg" alt="Miembro 1"/>
                <p>Descripción de Miembro 1.</p>
            </div>
            <div className="col-md-4 miembro-equipo">
                <img src="image2.jpg" alt="Miembro 2"/>
                <p>Descripción de Miembro 2.</p>
            </div>
            <div className="col-md-4 miembro-equipo">
                <img src="image3.jpg" alt="Miembro 3"/>
                <p>Descripción de Miembro 3.</p>
            </div>
            <div className="col-md-4 miembro-equipo">
                <img src="image4.jpg" alt="Miembro 4"/>
                <p>Descripción de Miembro 4.</p>
            </div>
            <div className="col-md-4 miembro-equipo">
                <img src="image5.jpg" alt="Miembro 5"/>
                <p>Descripción de Miembro 5.</p>
            </div>
            <div className="col-md-4 miembro-equipo">
                <img src="image6.jpg" alt="Miembro 6"/>
                <p>Descripción de Miembro 6.</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default About