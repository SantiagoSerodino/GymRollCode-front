import React from 'react';
import PlanCard from '../Components/generals/PlanCard/PlanCard';
import CardProduct from '../components/generals/CardProduct/CardProduct';
import Clima from '../Components/Specific/Clima/Clima';
import Instructores from '../Components/Specific/Instructores/Instructores';
import MarcasSponsor from '../Components/Specific/Marcas/MarcasSponsor';
import IntroPagina from '../Components/Specific/IntroPagina/IntroPagina';
import '../pages/StyleHomeScreen.css';
// imagenes
import botella from '../assets/imagesCards/botella-termica.jpg';
import remeraMujer from '../assets/imagesCards/remera-mujer.jpg';
import remeraHombre from '../assets/imagesCards/remera-hombre.jpg';
import proteinaHombre from '../assets/imagesCards/proteina-hombre.jpg';
import proteinaMujer from '../assets/imagesCards/proteina-mujer.jpg';
import combo from '../assets/imagesCards/combo.jpg';

const HomePage = () => {
  return (
    <>
      <div className='container-fluid fondo'>
        <div className=' container-fluid'>
          <IntroPagina />
        </div>
        <div className=''>
          <MarcasSponsor />
        </div>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-12 col-md-8 col-xl-9'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-5 col-lg-4 mb-4'>
                  <CardProduct image={botella} title='Botella' description='Botella termica de 500ml apta para deporte de acero inoxidable' brand='GymRoll' price='$9.860' importInfo='*Adquirida unicamente en el local*' />
                </div>
                <div className='col-12 col-md-5 col-lg-4 mb-4'>
                  <CardProduct image={remeraMujer} title='Remera-mujer' description='Remera deportiva de mujer, slim fit SECADO RÁPIDO' brand='GymRoll' price='$7.200' importInfo='*Adquirida unicamente en el local*' />
                </div>
                <div className='col-12 col-md-5 col-lg-4 mb-4'>
                  <CardProduct image={remeraHombre} title='Musculosa-hombre' description='Musculosa Capucha Entrenamiento Sudadera, SECADO RÁPIDO ' brand='GymRoll' price='$7.200' importInfo='*Adquirida unicamente en el local*' />
                </div>
                <div className='col-12 col-md-5 col-lg-4 mb-4'>
                  <CardProduct image={proteinaHombre} title='Proteina-hombre' description='SPX Nutrition Max Proteína 100% Whey Protein Polvo - Pote - Strawberry american cream - 1 - 1.08 kg' brand='Whey Protein' price='$5.560' importInfo='*Adquirida unicamente en el local*' />
                </div>
                <div className='col-12 col-md-5 col-lg-4 mb-4'>
                  <CardProduct image={proteinaMujer} title='Proteina-mujer' description='Sexy Fit Proteina diseñada para ellas., Proteina, Colageno, Acido folico' brand='In Shape' price='$6.500' importInfo='*Adquirida unicamente en el local*' />
                </div>
                <div className='col-12 col-md-5 col-lg-4 mb-4'>
                  <CardProduct image={combo} title='Combo' description='Una proteina, un aminoácido, una glutamina, y una creatina, que te ayudara en tu rendimiento' brand='Whey Protein' price='$20.000' importInfo='*Adquirida unicamente en el local*' />
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 col-xl-3'>
              <Clima />
            </div>
          </div>
          <div className='profesoresMG'>
            <Instructores />
            <PlanCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
