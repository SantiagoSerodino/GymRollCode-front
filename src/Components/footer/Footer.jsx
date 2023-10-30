import React from 'react'
import '../footer/styleFooter.css'



const Footer = () => {
    return (
    <>
        <div className='container-fluid bg-black py-1 mg divFooterMg'>
            <footer className='py-2 my-1 footerMG container '>
                <div className='row justify-content-between  border-bottom'>
                    <img className='col-md-4 col-lg-2 col img-fluid logoFooterMG pb-2 px-5 px-md-0' src='src/assets/logoPagina3.png' alt='logo de pagina' />
                    <ul className='col-md-6 col-lg-6 col-xl-4 row  align-content-center justify-content-end ' >
                        <li className=' py-2 col-md-4 text-center'><a href='#' className=' nav-link text-white mx-2'>Home</a></li>
                        <li className=' py-2 col-md-4 text-center'><a href='#' className=' nav-link text-white mx-2'>Planes-Fit</a></li>
                        <li className=' py-2 col-md-4 text-center'><a href='#' className=' nav-link text-white mx-2'>Nosotros</a></li>
                    </ul>
                </div>

                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <p className=' my-2 mb-md-0 text-white'>© 2023 GymRoll</p>
                    <ul className='my-2 col-md-4 justify-content-end list-unstyled d-flex'>
                        <li className='ms-3 fs-3'><a className='text-white' href='https://www.instagram.com/'><i className='bi bi-instagram'></i></a></li>
                        <li className='ms-3 fs-3'><a className='text-white' href='https://twitter.com/?lang=es'><i className='bi bi-twitter-x'></i></a></li>
                        <li className='ms-3 fs-3'><a className='text-white' href='https://www.facebook.com/'><i className='bi bi-facebook'></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>

        
    </>
    )
}

export default Footer