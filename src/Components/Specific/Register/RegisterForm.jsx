import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import SubmitButton from '../../generals/SubmitButton/SubmitButton';
import InputForm from '../../generals/InputForm/InputForm';

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    lastName:'',
    email: '',
    password: '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm((prevState)=>({
      ...prevState,
    [name] : value
    }));
     
  };

  const handleSubmit = () => {
    e.preventDefault();
    axios.post('/register', registerForm)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(()=> alert('Se ha registrado con exito'));


  };
  

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center mt5'>
          <form className='form col-4'onSubmit={handleSubmit} >
            <InputForm label='Nombre' name={'name'} type='text'handleChange={(event) => handleChange(event)}  />
            <InputForm label='Apellido' name={'lastName'} type='text' handleChange={(event) =>handleChange(event)} />
            <InputForm label='Email' name={'email'} type='email'handleChange={(event) => handleChange(event)} />
            <InputForm label='Password' name={'password'} type='password'handleChange={(event) => handleChange(event)} />
            <SubmitButton contenText='Registrarse'/>
          </form>
        </div>
    </div>
  )
};

export default RegisterForm;