import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../footer/styleFooter.css'



const Footer = () => {
    const [showFooter, setShowFooter] = useState(true)
    const location= useLocation()
    useEffect(() => {
        if(location.pathname === '/error'|| location.pathname === '/register' ){
        setShowFooter(false)
        }else{
        setShowFooter(true)
        }
    }, [location])
    return (
    <>
        
            <footer className={`py-2 footerMG  container-fluid ${!showFooter && 'd-none'}`}>
                <div className='row align-items-end justify-content-between border-bottom'>
                    <div className='col-md-4 col-lg-2 pb-2 px-3 px-md-2  logoFooterMG'>
                        <img className=' imgLogoFooter ' src='src/assets/logoPagina3.png' alt='logo de pagina' />
                    </div>
                    <ul className='textoFooterMG my-2 col-md-4 justify-content-evenly list-unstyled d-flex' >
                        <li className=' py-2  col-md-4 text-center'><a href='/' className=' nav-link text-white mx-2'>Home</a></li>
                        <li className=' py-2 col-md-4 text-center'><a href='/error' className=' nav-link text-white mx-2'>Planes-Fit</a></li>
                        <li className=' py-2 col-md-4 text-center'><a href='/about' className=' nav-link text-white mx-2'>Nosotros</a></li>
                    </ul>
                </div>

                <div className='row justify-content-between align-items-center'>
                    <p className='col-12 col-sm-6 col-md-4 ps-3 ps-sm-5  mt-2 mb-md-0 text-white d-flex justify-content-start textoFooterMG'>© 2023 GymRoll</p>
                    <ul className='col-12 col-sm-6 col-md-4 mb-2 my-sm-2 pe-3 pe-sm-5 iconoFooterMG justify-content-end list-unstyled d-flex'>
                        <li className='ms-3 '><a className='text-white' href='https://www.instagram.com/'><i className='bi bi-instagram'></i></a></li>
                        <li className='ms-3'><a className='text-white' href='https://twitter.com/?lang=es'><i className='bi bi-twitter-x'></i></a></li>
                        <li className='ms-3 '><a className='text-white' href='https://www.facebook.com/'><i className='bi bi-facebook'></i></a></li>
                    </ul>
                </div>
            </footer>
    
        
    </>
    )
}

export default Footer