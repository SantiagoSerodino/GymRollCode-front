import React, {useState} from 'react';
import './CardProduct.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CardProduct = ({ image, title, description, brand, price, importInfo }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="card card-product" onClick={toggle}>
        <div className="card-img pt-2 pb-2">
          <img src={image} alt="" />

        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody className="bg-modal-body">
          <div className="card ">
            <div className="card-body bg-color-item">
               <h5 className="card-title">Descripción:</h5>
              <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-color-item"><strong>Marca:</strong> {brand}</li>
              <li className="list-group-item bg-color-item"><strong>Precio:</strong> {price}</li>
              <li className="list-group-item bg-color-item "><strong>{importInfo}</strong></li>
            </ul>
          </div>
        </ModalBody>  
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CardProduct 