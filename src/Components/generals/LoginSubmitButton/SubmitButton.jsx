import React from 'react'

const SubmitButton = ({Text,petition}) => {
  return (
    <button type='submit' className='btn btn-outline-light w-100 mt-3 mb-5' onClick={petition}>{Text}</button>
  )
}

export default SubmitButton;