import React from 'react';
import PlanCard from '../Components/generals/PlanCard/PlanCard';
import CardProduct from '../components/generals/CardProduct/CardProduct';
import Clima from '../Components/Specific/Clima/Clima'
import Instructores from '../Components/Specific/Instructores/Instructores';
import MarcasSponsor from '../Components/Specific/Marcas/MarcasSponsor';
import IntroPagina from '../Components/Specific/IntroPagina/IntroPagina';
import '../pages/StyleHomeScreen.css';
import Comentarios from '../components/Specific/CommentsZone/Comments';


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
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/botella-termica.jpg' title="Botella" description="Botella termica de 500ml apta para deporte de acero inoxidable" brand="GymRoll" price="$9.860" importInfo="*Adquirida unicamente en el local*"/>
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/remera-mujer.jpg' title="Remera-mujer" description="Remera deportiva de mujer, slim fit SECADO RÁPIDO" brand="GymRoll" price="$7.200" importInfo="*Adquirida unicamente en el local*"/>
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/remera-hombre.webp' title="Musculosa-hombre" description="Musculosa Capucha Entrenamiento Sudadera, SECADO RÁPIDO " brand="GymRoll" price="$7.200" importInfo="*Adquirida unicamente en el local*" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/proteina-hombre.webp' title="Proteina-hombre" description="SPX Nutrition Max Proteína 100% Whey Protein Polvo - Pote - Strawberry american cream - 1 - 1.08 kg" brand="Whey Protein" price="$5.560" importInfo="*Adquirida unicamente en el local*" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/proteina-mujer.jpg' title="Proteina-mujer" description="Sexy Fit Proteina diseñada para ellas., Proteina, Colageno, Acido folico" brand="In Shape" price="$6.500" importInfo="*Adquirida unicamente en el local*" />
            </div>
            <div className="col-12 col-md-5 col-lg-4 mb-4">
              <CardProduct image='/images/combo.webp' title="Combo" description="Una proteina, un aminoácido, una glutamina, y una creatina, que te ayudara en tu rendimiento" brand="Whey Protein" price="$20.000" importInfo="*Adquirida unicamente en el local*" />
            </div>
          </div>
          </div>
          <div className="col-12 col-md-4 col-xl-3">
            <Clima/>
          </div>
        </div>
        <div className='profesoresMG'>
          <Instructores/>
          <PlanCard/>
          <Comentarios/>
        </div>

      
      </div>

    </div>
    </>
  );
};

export default HomePage