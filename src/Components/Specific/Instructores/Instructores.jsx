import React from 'react'
import '../Instructores/StyleInstructores.css'

const Instructores = () => {
    return (
        <>
        <div className='instructoresMG pb-5'>
        <h1 className='  py-4' >
            Nuestros Instructores 
        </h1>
        <div className='row'>
        <section className='col-12 justify-content-center sectionInstrucMG'>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor4.jpg" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay ">Mario Baracus </h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor5.jpeg" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Caterine Fulo</h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor1.jpg" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Rocky Balboa</h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor3.webp" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Ronda Rousey</h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor2.jpg" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">The Rock Johnson</h5>
        </div>

        </section>
        </div>
        </div>



        



        </>
    )
}

export default Instructores