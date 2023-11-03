import React from 'react'

const SubmitButton = ({Text}) => {
  return (
    <button type='submit' className='btn btn-outline-light w-100 mt-3 mb-5'>{Text}</button>
  )
}

export default SubmitButton;