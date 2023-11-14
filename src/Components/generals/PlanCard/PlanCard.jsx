import React from 'react';
import PlanMusculacion from '../PlanCard/Planes/PlanMusculacion';
import PlanClases from '../PlanCard/Planes/PlanClases';
import PlanFull from '../PlanCard/Planes/PlanFull';
import '../PlanCard/StylePlanCard.css'



const PlanCard = () => {


  return (
    <div className='plan-card'>
      <div className='container'>
        <div className='row justify-content-around '>
           <h1 className=' py-4'>Planes de membresía</h1>
        <div className='plan-musculacion row col-md-4 col-12 py-4 '>
            <h2 className='py-3'>Plan Musculacion</h2>
            <p className='py-2'>Acceso a nuestras instalaciones basicas</p>
            <p className='py-3'>Precio : ${5000} por mes </p>
            
            <a className='btn-plan btn btn-outline-success btn-lg' href='/musculacion'  >Accede a mas info del Plan
            </a>
           
          </div>

          <div className='plan-clases row col-md-4 col-12 py-4'>
            <h2 className='py-4'>Plan Clases</h2>
            <p className='py-3'>Acceso a nuestras instalaciones y clases grupales</p>
            <p className='py-3'>Precio : ${7500} por mes </p>
            <a className='btn-plan btn btn-outline-success btn-lg ' href='/clases'  >Accede a mas info del Plan
            </a>
          </div>

          <div className='plan-full row col-md-4 col-12 py-4'>
            <h2 className='py-4'>Plan Full</h2>
            <p className='py-3'>Acceso ilimitado a todas nuestras instalaciones, clases grupales y entrenador personal</p>
            <p className='py-3'>Precio : ${10800} por mes </p>
            <a className='btn-plan btn btn-outline-success btn-lg' href='/full'>Accede a mas info del Plan
            </a>
          </div>

        </div>
      </div>
  </div>
  )
}

export default PlanCard;