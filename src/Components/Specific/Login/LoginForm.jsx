import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../Login/styleLoginForm.css";
import SubmitButton from '../../generals/LoginSubmitButton/SubmitButton';
import LoginInputForm from '../../generals/LoginInputForm/LoginInputForm';
import { NavLink, useNavigate } from 'react-router-dom';


const LoginForm = ({setUser}) => {

  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setLoginForm((prevState) =>({
      ...prevState,
      [name] : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petitionPost();
  };

  const petitionPost = async() =>{
    try{
      const response = await  axios.post('https://gym-roll.onrender.com/user/login', loginForm)
      .then(navigate('/'))
      localStorage.setItem('user',JSON.stringify(response.data));
      setUser(response.data);
    }catch(error){
      console.log(error.message);
    }

  }
  return (

    <div className='container-fluid  gradient py-4'>

      <div className='row justify-content-center'>

        <h1 className="text-light fw-bold mb-4">Bienvenido!</h1>

        <form className='form col-12 col-sm-6 col-lg-4 colorForm' onSubmit={handleSubmit} >

          <img className='logoSize mt-3 mb-3' src='src/assets/logoPagina3.png' alt='logo' />
              
          <LoginInputForm label='Email' name='email' type='email' id={'email'} handleChange={(event) => handleChange(event)} />
          <LoginInputForm label='Contraseña' name='password' type='password' id={'password'}handleChange={(event) => handleChange(event)} />
          <SubmitButton Text='Inicia Sesion' petition={handleChange}/>
        <div className="text-center mb-3">
          <p className="d-inline-block text-light">¿No tienes una cuenta?</p> <NavLink to='/register' className="text-light fw-bold d-inline-flex" >CREA UNA AHORA!</NavLink>
        </div>
        </form>
        <div>
          <NavLink to='/' className='w-25 btn btn-outline-success mt-3'>Home</NavLink>
        </div>

      </div>

    </div>

  )

};

export default LoginForm;