import React, { useState } from 'react';
import axios from 'axios';
import SubmitButton from '../../generals/SubmitButton/SubmitButton';
import InputForm from '../../generals/InputForm/InputForm';

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(registerForm);
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameRegex = /^[A-Za-z]{3,12}$/;
    const lastNameRegex = /^[A-Za-z]{3,12}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^.{8,}$/;

    if (!nameRegex.test(registerForm.name)) {
      alert('El campo Nombre debe tener entre 3 y 12 caracteres');
      return;
    }

    if (!lastNameRegex.test(registerForm.lastName)) {
      alert('El campo Apellido debe tener entre 3 y 12 caracteres');
      return;
    }

    if (!emailRegex.test(registerForm.email)) {
      alert('El correo electrónico no es válido');
      return;
    }

    if (!passwordRegex.test(registerForm.password)) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    petitionPost();
  };

  const petitionPost = async () => {
    try {
      const response = await axios.post('https://gym-roll.onrender.com/user/register', registerForm);
      console.log(response);
      alert('Se ha registrado con éxito');
    } catch (error) {
      console.error('Error al registrar', error);
      alert('Hubo un error al registrar. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center mt-5'>
        <form className='form col-4' onSubmit={handleSubmit}>
        <InputForm label='Nombre' name={'name'} type='text' id={'name'}handleChange={(event) => handleChange(event)}  />
            <InputForm label='Apellido' name={'lastName'} type='text' id={'lastName'} handleChange={(event) =>handleChange(event)} />
            <InputForm label='Numero de Telefono' name={'phoneNumber'} type='number' id={'phoneNumber'} handleChange={(event) => handleChange(event)} />
            <InputForm label='Email' name={'email'} type='email' id={'email'} handleChange={(event) => handleChange(event)} />
            <InputForm label='Password' name={'password'} type='password' id={'password'} handleChange={(event) => handleChange(event)} />

          <SubmitButton petition={petitionPost} contenText='Registrarse' />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;