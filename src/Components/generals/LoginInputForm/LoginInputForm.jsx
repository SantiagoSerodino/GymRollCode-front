import React from 'react';

const LoginInputForm = ({label, type, handleChange, name}) => {
  return (
    <div className='mb-3'>
      <label className='form-label'>{label}</label>
      <input type={type} className='form-control' name='name' onChange={handleChange}/>

    </div>
  )
}

export default LoginInputForm