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
            <img src="../src/assets/logoPagina2.png" alt="Imagen del grupo" className="img-fluid logoAboutMG pt-3 pb-5"/>
        </div>
        {/* descripción de quienes somos */}
        <div className="row empresaMG pb-3">
            <div className="col-md-6">
                <img src="../src/assets/about-img/grupo.jpg" alt="Imagen del grupo" className="img-fluid imgEmpresaMG"/>
            </div>
            <div className="col-md-6 fs-5 py-3 text-white-50 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus ab, exercitationem alias harum dolore amet asperiores, pariatur illum minima eaque porro. Numquam totam error voluptatem quo sit ea inventore.</p>
            </div>
        </div>
    </div>
    {/* <!-- Mision y Vision --> */}
    <div className="container misionVisionMG">
        <div className="row">
            <div className="col-md-6 text-white-50 ">
                <h2 className='misionMG'>Misión</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellat vero minus reprehenderit, nulla nisi mollitia distinctio, accusantium consequatur provident blanditiis ipsa labore temporibus ducimus, voluptates quibusdam cum laborum eligendi?</p>
            </div>
            <div className="col-md-6 text-white-50 ">
                <h2 className='visionMG'>Visión</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quisquam assumenda dolorem adipisci accusamus ratione ad asperiores nihil necessitatibus impedit? Vero sequi quod corporis iure saepe eligendi laboriosam reiciendis. Fugit?</p>
            </div>
        </div>
    </div>

    {/* <!-- Lista de miembros del equipo --> */}
    <div className="container equipoContainerMG pb-5">
        <div className="row justify-content-evenly">
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='pb-5 imgPersonajeMG w-100 align-content-center'>
                    <h1 className=' textMienbroMG '>Mauro Gutierrez</h1>
                    {/* <p className=' textMienbroMG '>Descripción de Miembro 6.</p>
                    <p className=' textMienbroMG '>Descripción de Miembro 6.</p>
                    <p className=' textMienbroMG '>Descripción de Miembro 6.</p>
                    <p className=' textMienbroMG '>Descripción de Miembro 6.</p> */}
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG  w-100'>
                    <p className=' textMienbroMG '>Descripción de Miembro 6.</p>
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG  w-100'>
                    <p className=' textMienbroMG '>Descripción de Miembro 6.</p>
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG  w-100'>
                    <p className=' textMienbroMG '>Descripción de Miembro 6.</p>
                </div>
            </article>
            <article className="col-md-4 articleMG">
                <img src="../src/assets/about-img/miembro1.png" alt="Miembro 6" className='p-3 imgPersonaMG'/>
                <div className='imgPersonajeMG  w-100'>
                    <p className=' textMienbroMG '>Descripción de Miembro 6.</p>
                </div>
            </article>
        </div>
    </div>

    </div>
    </>
    )
}

export default About