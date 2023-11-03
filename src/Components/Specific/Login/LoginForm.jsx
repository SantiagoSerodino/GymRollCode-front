import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../Login/styleLoginForm.css";
import SubmitButton from '../../generals/LoginSubmitButton/SubmitButton';
import LoginInputForm from '../../generals/LoginInputForm/LoginInputForm';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  
  return (

      <div className='container-fluid gradient'>

        <div className='row justify-content-center'>

          <h1 class="text-light fw-bold mb-4">Bienvenido!</h1>

            <form className='form col-4 colorForm' >

              <img className='logoSize mt-3 mb-3' src='src/assets/logoPagina3.png' alt='logo' />
              
              <LoginInputForm label='Email' name={'email'} type='email'handleChange={(event) => handleChange(event)} />
              <LoginInputForm label='Password' name={'password'} type='password'handleChange={(event) => handleChange(event)} />
              <SubmitButton Text='Inicia Sesion'/>
            </form>

            <div class="text-center mt-4">
              <p className="d-inline-block text-light">¿No tienes una cuenta?</p> <Link href="/" className="text-light fw-bold" >Crea una ahora!</Link>
            </div>

          </div>

      </div>

    )

}


  export default LoginForm