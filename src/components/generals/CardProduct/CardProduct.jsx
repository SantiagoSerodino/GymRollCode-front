import React from 'react';
import './CardProduct.css';

const CardProduct = ({ image, title, description }) => {
  return (
    <div className="card card-product">
      <div className="card-img pt-2 pb-2">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CardProduct 