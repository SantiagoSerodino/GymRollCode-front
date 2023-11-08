import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPlan from './ButtonPlan';


const PlanCard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      <Link to="/login"></Link>
    } else {
      setIsAuthenticated(true);
      <Link to="/"></Link>
    }
  }

  return (
    <div className='plan-card container'>
      <h1 className=' py-4'>
        Planes de membresía
      </h1>
      <div className='row'>
        <section className='col-12 col-md-5 col-lg-4 mb-4'>
          

      <div className='planes'>
      <div className='plan-musculacion'>
        <h2>Plan Musculacion</h2>
        <p>Acceso a nuestras instalaciones basicas</p>
        <p>Precio : ${5000} por mes </p>
        <ButtonPlan onClick={handleButtonClick} isAuthenticated={isAuthenticated} contenText='Accede a mas info del Plan' /> 
      </div>

      <div className='plan-clases'>
        <h2>Plan Clases</h2>
        <p>Acceso a nuestras instalaciones y clases grupales</p>
        <p>Precio : ${7500} por mes </p>
        <ButtonPlan onClick={handleButtonClick} isAuthenticated={isAuthenticated} contenText='Accede a mas info del Plan' /> 
      </div>

      <div className='plan-full'>
        <h2>Plan Full</h2>
        <p>Acceso ilimitado a todas nuestras instalaciones, clases grupales y entrenador personal</p>
        <p>Precio : ${10800} por mes </p>
        <ButtonPlan onClick={handleButtonClick} isAuthenticated={isAuthenticated} contenText='Accede a mas info del Plan' /> 
      </div>
      </div>
        </section>
    </div>
      </div>
  )
}

export default PlanCard;