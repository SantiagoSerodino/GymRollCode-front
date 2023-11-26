import React from 'react';
import { Link } from 'react-router-dom';
import '../ErrorScreen/StyleErrorScreen.css';
import logoPaginaError from '../../assets/logoPagina2.png';
import logoError from '../../assets/404.png';

const ErrorScreen = () => {
   return (
      <>
         <div className='container-fluid bodyErrorMG'>
            <div className='row justify-content-center'>
               <div className='col-12 col-md-6 col-lg-4'>
                  <div className='text-center pt-2'>
                     <img src={logoPaginaError} alt='Logo de la página' className='img-fluid py-5 py-md-1 w-50' />
                  </div>
                  <div className='text-center py-4 '>
                     <img src={logoError} alt='Error 404' className='img-fluid w-100' />
                  </div>
                  <div className='text-center pb-2'>
                     <h1 className=' text-uppercase fs-4 p-4'>No se pudo conectar</h1>
                     <Link to='/' className='btn text-light bg-dark my-2'>
                        Inicio
                     </Link>
                  </div>
                  <div className='container text-center pt-2'>
                     <div className='row  copyrightMG'>
                        <div className='col'>
                           <p className=' text-center'>© 2023 GymRoll</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ErrorScreen;
