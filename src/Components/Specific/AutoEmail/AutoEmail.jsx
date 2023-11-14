import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import '../AutoEmail/StyleAutoEmail.css';

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


        <div className="container ">
          <div className="container my-5 py-3 col-12 col-md-6 contenedorAutoEmailMG">
          <div className="row justify-content-between">
            <h1 className="col-12 py-3">Consulta por tus planes</h1>
            <form className="formularioMG" ref={form} onSubmit={sendEmail}>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG  form-label">Nombre:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input className="campoMG w-100" type="text" name="name" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Apellido:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input className="campoMG w-100" type="text" name="last" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Celular / Teléfono:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input className="campoMG w-100" type="number" name="phone" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Email:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input className="campoMG w-100" type="email" name="email" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Planes disponibles:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <Form.Select aria-label="Default select example" className="campoMG w-100" name="opcion">
                    <option>Selecciona el tipo de plan</option>
                    <option value="MUSCULACION">MUSCULACION</option>
                    <option value="CLASES">CLASES</option>
                    <option value="FULL">FULL</option>
                  </Form.Select>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <input className=" botonMG bg-black" type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>

          </div>
        </div>


      </>
  );
};

export default AutoEmail;
