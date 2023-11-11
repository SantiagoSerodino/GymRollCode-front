import React from 'react';
// import PlanCard from '../Components/generals/PlanCard/PlanCard';
import CardProduct from '../components/generals/CardProduct/CardProduct';
import Clima from '../Components/Specific/Clima/Clima'
import Instructores from '../Components/Specific/Instructores/Instructores';
import MarcasSponsor from '../Components/Specific/Marcas/MarcasSponsor';
import IntroPagina from '../Components/Specific/IntroPagina/IntroPagina';
import '../pages/StyleHomeScreen.css';

const HomePage = () => {
  return (
    <>
    <div className="container-fluid fondo">
      <div className=' container-fluid'>
        <IntroPagina/>

      </div>


        <div className=''> 
        <MarcasSponsor/>
        </div>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-md-8 col-xl-9">
            <div className="row justify-content-center">
              {/* <PlanCard/> */}
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/botella-termica.jpg' title="Botella" description=""/>
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/remera-mujer.jpg' title="Remera-mujer" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/remera-hombre.webp' title="Remera-hombre" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/proteina-hombre.webp' title="Proteina-hombre" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/proteina-mujer.jpg' title="Proteina-mujer" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/combo.webp' title="Combo" />
            </div>
          </div>
          </div>
          <div className="col-12 col-md-4 col-xl-3">
            <Clima/>
          </div>
        </div>
        <div className='profesoresMG'>
          <Instructores/>
        </div>
      
      </div>

    </div>
    </>
  );
};

export default HomePage