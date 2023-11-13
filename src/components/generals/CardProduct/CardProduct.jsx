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
        <ModalBody>
          {description}
          {brand}
          {price}
          {importInfo}
        </ModalBody>  
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CardProduct 