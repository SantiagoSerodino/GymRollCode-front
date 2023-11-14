import React from 'react';

const LoginInputForm = ({label, type, handleChange, name,id}) => {
  return (
    <div className='mb-3'>
      <label className='form-label text-light fw-bold'>{label}</label>
      <input type={type} className='form-control bg-dark text-light border-0' name={name} id={id} onChange={handleChange}/>

    </div>
  )
}

export default LoginInputForm