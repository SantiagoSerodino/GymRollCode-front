import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../pages/styleLoginPage.css"

const Login = () => {

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function submit(event) {
    event.preventDefault();
  }

    return (

      <div className="row colorFondo d-flex">

          <div className="col-7 d-none d-lg-block">
            <h1>hola</h1>
          </div>

        <div className="col-5 gradient border">
          
           <img className='mt-5 img-fluid logoLogin pb-2 px-5 px-md-0' src='src/assets/logoPagina3.png' alt='logoDePagina' />

           <h1 className="text-light fw-bold mb-4">Bienvenido</h1>

          <form>

             <div className="mt-5 mb-3">
                 <label className="form-label text-light fw-bold">Email</label>
               <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control bg-dark border-0 text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div>

             <div className="mb-3">
               <label className="form-label text-light fw-bold">Contraseña</label>
               <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control bg-dark border-0 text-light" id="exampleInputPassword1"/>
             </div>



           <button type="submit" onClick={submit} className="btn btn-dark w-100 mt-3 fw-bold">Inicia Sesion</button>

          </form>

            <div>
  
              <div className="text-center mt-4">
                {/* <p class="d-inline-block mb-0 text-light">¿No tienes una cuenta?</p> <link class="text-light fw-bold" href="/login">Crea una ahora!</link> */}
              </div>
  
            </div>
        </div>

      </div>
    )
}


export default Login