import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import SubmitButton from '../../generals/LoginSubmitButton/SubmitButton';
import LoginInputForm from '../../generals/LoginInputForm/LoginInputForm';
inport 

const LoginForm = () => {
  
  return (
      <div className='container-fluid'>
        <div className='row justify-content-center mt5'>
            <form className='form col-4' >
              <LoginInputForm label='Email' name={'email'} type='email'handleChange={(event) => handleChange(event)} />
              <LoginInputForm label='Password' name={'password'} type='password'handleChange={(event) => handleChange(event)} />
              <SubmitButton contenText='Inicia Sesion'/>
            </form>
          </div>
      </div>
    )

}


  export default LoginForm

  



