import React from 'react'
import '../About/StyleAbout.css'

const About = () => {

    return (
    <>
    <div className=' container-fluid bg-black'>

    {/* <!-- Parte superior con la imagen del grupo y la descripción --> */}
    <div className="container logoContainerMG">
        {/* logo de empresa */}
        <div className='contenedorLogoMG'>
            <img src="../src/assets/logoPagina4.png" alt="Imagen del grupo" className="img-fluid logoAboutMG pt-3 pb-5"/>
        </div>
        {/* descripción de quienes somos */}
        <div className="row empresaMG pb-3">
            <div className="col-md-6">
                <img src="../src/assets/about-img/grupo.png" alt="Imagen del grupo" className="img-fluid imgEmpresaMG"/>
            </div>
            <div className="col-md-6 fs-5 py-3 text-white-50 ">
                <p>En GymRoll, creemos que la actividad física es la clave para una vida saludable y feliz. Por eso, ofrecemos a nuestros clientes una experiencia de entrenamiento única, con tecnología de punta, instructores profesionales y una amplia variedad de clases personalizadas.</p>
            </div>
        </div>
    </div>
    {/* <!-- Mision y Vision --> */}
    <div className="container misionVisionMG">
        <div className="row">
            <div className="col-md-6 text-white-50 ">
                <h2 className='misionMG'>Misión</h2>
                <p>Nuestra misión es ayudar a nuestros clientes a alcanzar sus metas de fitness, brindándoles un servicio de excelencia y una experiencia de entrenamiento personalizada.</p>
            </div>
            <div className="col-md-6 text-white-50 ">
                <h2 className='visionMG'>Visión</h2>
                <p>Ser el gimnasio líder en la región, ofreciendo a nuestros clientes la mejor experiencia de entrenamiento posible.</p>
            </div>
        </div>
    </div>

    {/* <!-- Lista de miembros del equipo --> */}
    <div className="container equipoContainerMG pb-5">
        <div className="row justify-content-evenly">
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG px-3 pb-5 w-100 '>
                    <h2 className=' textMienbroMG '>Natalia Aguirre</h2>
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG px-3 pb-5  w-100'>
                    <h2 className=' textMienbroMG '>Mauro Gutierrez </h2>
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG px-3 pb-5 w-100'>
                    <h2 className=' textMienbroMG '>Franco Margagliotti</h2>
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG px-3 pb-5 w-100'>
                    <h2 className=' textMienbroMG '>Santiago Serodino.</h2>
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG px-3 pb-5 w-100'>
                    <h2 className=' textMienbroMG '>Leandro Cudmani</h2>
                </div>
            </article>
        </div>
    </div>

    </div>
    </>
    )
}

export default About