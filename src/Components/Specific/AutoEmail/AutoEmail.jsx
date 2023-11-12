import React, { useState } from 'react';
import '../AutoEmail/StyleAutoEmail.css'



const AutoEmail = () => {


  


  return (

    <>
    
    <h1>consulta por tus planes</h1>

    <div className="container contenedorAutoEmailMG">
      <div className="row">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" classNameName="form-label">Nombre y Apellido</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    </div>




    </>

  )
}

export default AutoEmail