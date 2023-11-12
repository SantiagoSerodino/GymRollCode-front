import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import '../AutoEmail/StyleAutoEmail.css'

const AutoEmail = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2a53ebs', 'template_fdqb0ss', form.current, 'Kr4FcE7jz6B_tQ9Bx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <>
    <div className="container  w-50 contenedorAutoEmailMG">
      <div className="row fs-2 justify-content-between ">
      <h1 className=''>consulta por tus planes</h1>
        <form className=' formularioMG' ref={form} onSubmit={sendEmail}>
          <div className="mb-3 d-flex justify-content-around">
            <label  className=" tituloMG form-label w-50">Nombre: </label>
            <input className='campoMG w-50' type="text" name="name" />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label  className=" tituloMG form-label">Apellido:</label>
            <input className='campoMG w-50' type="text" name="last" />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label  className=" tituloMG form-label">Celular / Telfono:</label>
            <input className='campoMG w-50' type="number" name="phone" />
          </div>
          <div className="mb-3 d-flex justify-content-around">
            <label className=" tituloMG form-label">Email:</label>
            <input className='campoMG w-50' type="email" name="email" />
          </div>
          <div className=' d-flex justify-content-around'>
            <label className=" tituloMG form-label w-50">Planes disponibles:</label>
            <Form.Select aria-label="Default select example" className='campoMG w-50' name="opcion">
              <option className=''>Seleciona el tipode plan</option>
              <option value="MUSCULACION">MUSCULACION</option>
              <option value="CLASES">CLASES</option>
              <option value="CLASES">FULL</option>
            </Form.Select>
          </div>
          <input className="btn btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </div>

      </>
  );
};

export default AutoEmail;
