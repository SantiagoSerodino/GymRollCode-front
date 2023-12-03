import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../AutoEmail/StyleAutoEmail.css';

const AutoEmail = () => {
  const form = useRef();

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    last: '',
    phone: '',
    email: '',
    opcion: 'Selecciona el tipo de plan',
  });

  // Estado para el modal
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2a53ebs', 'template_fdqb0ss', form.current, 'Kr4FcE7jz6B_tQ9Bx')
      .then((result) => {
        console.log(result.text);

        // Limpia los datos del formulario después de enviar el email
        clearForm();

        // Muestra el modal
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  // limpia los datos del formulario
  const clearForm = () => {
    setFormData({
      name: '',
      last: '',
      phone: '',
      email: '',
      opcion: 'Selecciona el tipo de plan',
    });
  };

  const handleCloseModal = () => {
    // Cierra el modal y realiza otras acciones si es necesario
    setShowModal(false);
  };

  return (
    <>
      <div className="container ">
        <div className="container my-5 py-3 col-12  contenedorAutoEmailMG">
          <div className="row justify-content-between">
            <h1 className="col-12 py-3">Consulta por tus planes</h1>
            <form className="formularioMG" ref={form} onSubmit={sendEmail}>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG  form-label">Nombre:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input
                    className="campoMG w-100"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Apellido:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input
                    className="campoMG w-100"
                    type="text"
                    name="last"
                    value={formData.last}
                    onChange={(e) => setFormData({ ...formData, last: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Celular / Teléfono:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input
                    className="campoMG w-100"
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Email:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <input
                    className="campoMG w-100"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6 d-flex justify-content-end">
                  <label className="tituloMG form-label">Planes disponibles:</label>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <Form.Select
                    aria-label="Default select example"
                    className="campoMG w-100"
                    name="opcion"
                    value={formData.opcion}
                    onChange={(e) => setFormData({ ...formData, opcion: e.target.value })}
                  >
                    <option>Selecciona el tipo de plan</option>
                    <option value="MUSCULACION">MUSCULACION</option>
                    <option value="CLASES">CLASES</option>
                    <option value="FULL">FULL</option>
                  </Form.Select>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <input className=" botonMG bg-black" type="submit" value="Enviar Datos" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal  show={showModal} onHide={handleCloseModal}>
        <div className='modalEmailMG'> 
        <Modal.Header closeButton>
          <Modal.Title>Éxito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tus datos fueron enviados correctamente. ¡Muchas gracias!
        </Modal.Body>
        <Modal.Footer>
          <Button   variant="success" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default AutoEmail;
