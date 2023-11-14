import React from 'react';


const InputForm = ({label, type, handleChange, name,id}) => {
  return (
    <div className='mb-3'>
      <label className='form-label'>{label}</label>
      <input type={type} className='form-control' name={name} id={id} onChange={handleChange}/>

    </div>
  )
}

export default InputForm