import React from 'react'
import '../Instructores/StyleInstructores.css'

const Instructores = () => {
    return (
        <>
        <h1>
            Instructores
        </h1>
        {/* <div className='row'>
        <section className='col-12 justify-content-center sectionInstrucMG'>
            <img className='imgMG' src="../src/assets/Instructores/instructor1.jpg" alt="" />
            <img className='imgMG' src="../src/assets/Instructores/instructor3.webp" alt="" />
            <img className='imgMG' src="../src/assets/Instructores/instructor2.jpg" alt="" />
            <img className='imgMG' src="../src/assets/Instructores/instructor1.jpg" alt="" />
            <img className='imgMG' src="../src/assets/Instructores/instructor3.webp" alt="" />
        </section>
        </div> */}

        <div className='row'>
        <section className='col-12 justify-content-center sectionInstrucMG'>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor3.webp" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Card title</h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor2.jpg" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Card title</h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor1.jpg" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Card title</h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor3.webp" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Card title</h5>
        </div>
        <div className=" imgMG">
            <img src="../src/assets/Instructores/instructor2.jpg" className="imagenn " alt="..."/>
            <h5 className="card-img-overlay">Card title</h5>
        </div>

            {/* <img className='imgMG' src="../src/assets/Instructores/instructor3.webp" alt="" />
            <img className='imgMG' src="../src/assets/Instructores/instructor2.jpg" alt="" />
            <img className='imgMG' src="../src/assets/Instructores/instructor1.jpg" alt="" />
            <img className='imgMG' src="../src/assets/Instructores/instructor3.webp" alt="" /> */}
        </section>
        </div>



        



        </>
    )
}

export default Instructores